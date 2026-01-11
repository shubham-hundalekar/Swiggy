import { useEffect, useState } from "react";
import resList from "../utils/mockdata";
import RestaurantCard, {withFreeDeliveryLable} from "./RestaurantComponent";
import ShimmerComp from "./Shimmer";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyComponent = () =>{
    const [listofRestaurant,setListofRestaurant] = useState([]) 
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardFreeDelivery = withFreeDeliveryLable(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },[])
    const fetchData =async ()=>{
        const data =await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9084808&lng=77.6098623&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json = await data.json();
        const listR = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListofRestaurant(listR);
        setFilteredRestaurants(listR);
        console.log(listR)
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return <h1>Looks like you are offline... Please Check your Internet connection</h1>
    }

    return listofRestaurant.length === 0 ? <ShimmerComp/>: (
        <div className="body">
            <div className="flex">
                <div className="p-4 m-4 ">
                    <input className="p-2 border border-black border-solid rounded" type="text"  placeholder="Filter" value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                        }
                    } />
                    <button className="p-2 m-2 bg-gray-200 rounded" onClick={()=>{
                        const filteredRestaurant = listofRestaurant.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRestaurants(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className="p-4 m-4 ">
                    <button className="p-2 m-2 bg-gray-400 rounded" 
                        onClick={()=>{
                            const filterData = listofRestaurant.filter((res)=>res.info.avgRating<4.4);
                            setFilteredRestaurants(filterData);
                        }}>Filter top rated Restaurant</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                    {
                        filteredRestaurants.map((restaurant) =>( 
                            
                            <Link to={"restaurants/"+restaurant.info.id} key={restaurant.info.id} >
                                {
                                    restaurant.info.avgRating >=4.4 ? 
                                    (<RestaurantCardFreeDelivery resData={restaurant}/>)
                                    :   (<RestaurantCard  resData={restaurant}/>)
                                }
                            </Link>))
                    }
            </div>
        </div>
  )
}
export default BodyComponent;