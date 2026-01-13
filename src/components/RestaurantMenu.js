
import {useParams} from "react-router-dom"
import {useState} from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu"  
import menuData from "../utils/menuData";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerComp from "./Shimmer";
const RestaurantMenu = ()=>{
    const [showIndex, setShowIndex] = useState(null)
    // const {resId} = useParams();
    const resId = "855478";
    const resMenu = useRestaurantMenu(resId);
    return(
        
        <div className="text-center">
            <h1 className="my-4 text-2xl font-bold">{menuData[0].mainMenu[resId].name}</h1>
            <h2 className="text-xl font-bold ">Menu</h2>
            <p className="font-bold ">{menuData[0].mainMenu[resId].cuisines.join(", ")}</p>
            {
               resMenu == null? <ShimmerComp/> : 
                Object.keys(resMenu?.title).map((titleName, index) => (
                    //Controlled component
                    <RestaurantCategory
                        key={titleName} 
                        resMenu={resMenu}
                        title={titleName}
                        showItems={index === showIndex ? true: false}
                        setShowIndex = {()=>setShowIndex(index)}
                    />
                    ))

            }
        </div>
    )
}

export default RestaurantMenu;