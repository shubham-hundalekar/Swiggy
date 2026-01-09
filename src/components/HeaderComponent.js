import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const HeaderComponent = () =>{
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus(); 
    
    return(  
        <div className="flex justify-between bg-pink-100 shadow-lg">
            
            <div className="logo-constainer">
                <img className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center font-serif ">
                <ul className="flex p-4 m-4">
                    <li className="p-3">
                        Online Status: {onlineStatus ? "✅": "🔴"}
                    </li>
                    <li className="p-3">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="p-3"> 
                        <Link to="/" >Home</Link>
                    </li>                    
                    <li className="p-3">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="p-3">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="p-3">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button className="login" onClick={()=>{
                        btnName === "Login" ?  setBtnName("Logout"): setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;