import {useState} from "react";
const ItemList = (props)=>{
    const itemList = props.itemList;
    
    return (
        <div className="">
            {
                itemList.map((res)=>(<div className="" key={res.id}>
                    <div className="flex justify-between p-2 text-left border-b-2 border-gray-200">
                        <div>
                            <span>{res.name}</span> - Rs.<span>{res.costForTwo}</span>
                        </div>
                        <div className="justify-center">
                            <img className="w-[80px] " src="https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?cs=srgb&dl=close-up-cooking-dinner-46239.jpg&fm=jpg" alt="" />
                            <button className="w-full py-1 my-1 text-sm font-bold text-center text-white bg-black rounded-md shadow-sm my-19" >ADD</button>
                            
                            </div>
                    </div>
                </div>))
            }
        </div>
    )
}

export default ItemList;