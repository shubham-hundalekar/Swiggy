
import {useParams} from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"  
import menuData from "../utils/menuData";
import ShimmerComp from "./Shimmer";
const RestaurantMenu = ()=>{
    // const {resId} = useParams();
    const resId = "10894";
    console.log(resId);
    const resMenu = useRestaurantMenu(resId);    
    return(
        
        <div>
            <h1>{menuData[0].mainMenu[resId].name}</h1>
            <h2>Menu</h2>
            <p>{menuData[0].mainMenu[resId].cuisines.join(", ")} :  Rs {menuData[0].mainMenu[resId].menu[0].costForTwo} for two</p>
            <ul>
                {
                    resMenu === null ? <ShimmerComp/> : 
                    resMenu.map((res)=>(<li key={res.id}>{res.name} - Rs. {res.costForTwo}</li>))
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;