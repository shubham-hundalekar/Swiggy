import resList from "../utils/mockdata";
import {CDN_URL} from "../utils/constants"
const RestaurantCard = (props)=>{
    const {resData} = props; //destructuring objects 
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData.info
    return(
        <div className="p-2 m-5 w-[250px] rounded shadow-lg cursor-pointer bg-gray-100 hover:bg-gray-200">
            <img className="rounded" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="py-2 font-bold">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} </h4>
            <h4>38 minutes</h4>
        </div>
    )
}

export default RestaurantCard;