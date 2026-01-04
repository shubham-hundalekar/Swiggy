import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import menuData from "../utils/menuData";
import ShimmerComp from "./Shimmer";
const RestaurantMenu = ()=>{
    // const {resId} = useParams();
    const resId = "10894";
    console.log(resId)
    const [resMenu, setResMenu] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    

    const fetchData = async ()=>{
        const menu = menuData[0].menu[resId];
        setResMenu(menu.menu);
        console.log(menu.menu); 

    }
    return(
        
        <div>
            <h1>{menuData[0].menu[resId].name}</h1>
            <h2>Menu</h2>
            <ol>
                {
                    resMenu === null ? <ShimmerComp/> : 
                    resMenu.map((res)=>(<li key={res.id}>{res.name} - Rs. {res.costForTwo}</li>))
                }
            </ol>
        </div>
    )
}

export default RestaurantMenu;