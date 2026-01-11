
import {useParams} from "react-router-dom"
import {useState} from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu"  
import menuData from "../utils/menuData";
import RestaurantCartegory from "./RestaurantCategory";
import ShimmerComp from "./Shimmer";
const RestaurantMenu = ()=>{
    // const {resId} = useParams();
    const resId = "10894";
    const resMenu = useRestaurantMenu(resId);
    console.log(resMenu?.title)
    return(
        
        <div className="text-center">
            <h1 className="my-4 text-2xl font-bold">{menuData[0].mainMenu[resId].name}</h1>
            <h2 className="text-xl font-bold ">Menu</h2>
            <p className="font-bold ">{menuData[0].mainMenu[resId].cuisines.join(", ")}</p>
             
            {   
                resMenu == null ? <ShimmerComp/>:
                // resMenu.Recommended.map((res)=>(<li key={res.id}>{res.name} - Rs. {res.costForTwo}</li>))
                 <RestaurantCartegory
                 resMenu={resMenu.Recommended} 
                 title={"Recommended"}
                 key={"Recommended"}/>
                 

            }
            {   
                resMenu == null ? <ShimmerComp/>:
                <RestaurantCartegory 
                resMenu={resMenu.NewlyAdded} 
                title={"Newly Added"}
                key={"Newly Added"}/>
            }
            {   
                resMenu == null ? <ShimmerComp/>:
                 <RestaurantCartegory
                 resMenu={resMenu.Shakes} 
                 title={"Shakes"} 
                 key={"Shakes"}/>

            }
            {   
                resMenu == null ? <ShimmerComp/>:
                <RestaurantCartegory 
                resMenu={resMenu.Ice_Cream} 
                title={"Ice Cream"}
                key={"Ice cream"}/>
            } 


            



        </div>
    )
}

export default RestaurantMenu;