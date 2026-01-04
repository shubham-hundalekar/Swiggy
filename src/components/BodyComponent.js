import { useEffect, useState } from "react";
import resList from "../utils/mockdata";
import RestaurantCard from "./RestaurantComponent";
import ShimmerComp from "./Shimmer";
import {Link} from "react-router-dom"


const BodyComponent = () =>{
    const [listofRestaurant,setListofRestaurant] = useState([]) 
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[])
    const fetchData =async ()=>{
        const data =await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9084808&lng=77.6098623&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json = await data.json();
        const listR = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListofRestaurant(listR);
        setFilteredRestaurants(listR);
        console.log(listR)
    }

    return listofRestaurant.length === 0 ? <ShimmerComp/>: (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="Filter" value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                        }
                    } />
                    <button onClick={()=>{
                        const filteredRestaurant = listofRestaurant.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRestaurants(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" 
                onClick={()=>{
                    const filterData = listofRestaurant.filter((res)=>res.info.avgRating<4.4);
                    setFilteredRestaurants(filterData);
                }}>Filter top rated Restaurant</button>
            </div>
            <div className="res-container">
                    {
                        filteredRestaurants.map((restaurant) =>( <Link to={"restaurants/"+restaurant.info.id} key={restaurant.info.id} ><RestaurantCard  resData={restaurant}/></Link>))
                    }
            </div>
        </div>
  )
}
export default BodyComponent;