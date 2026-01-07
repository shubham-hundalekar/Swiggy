
import { useEffect, useState } from "react";
import menuData from "./menuData";

const useRestaurantMenu = (resId)=>{
    const [resMenu, setResMenu] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async ()=>{
        const menu = menuData[0].mainMenu[resId];
        setResMenu(menu.menu);
        console.log(menu.menu); 
    }
    return resMenu
}
export default useRestaurantMenu;
