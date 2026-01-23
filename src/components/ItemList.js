import {useState} from "react";
const ItemList = ({qty, handleAdd, itemList})=>{
    // const itemList = itemList;

    const add = (idx,temp)=>{
        handleAdd(idx,temp)
    }
    
    return (
        <div className="">
            {
                itemList.map((res,idx)=>(<div className="my-2" key={res.id}>
                    <div className="bg-gray-200 border border-gray-600 border-solid ">
                        <div className="flex justify-between p-2 text-left">
                             <div>
                                <span>{res.name}</span> - Rs.<span>{res.costForTwo}</span>
                            </div>
                            <div className="justify-center p-2">
                                <img className="w-[80px] " src="https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?cs=srgb&dl=close-up-cooking-dinner-46239.jpg&fm=jpg" alt="" />
                                {!qty[idx] && <button className="w-full text-sm font-bold text-center text-white bg-black rounded-md my-19" onClick={()=>add(idx,1)}>ADD</button>}
                                {
                                qty[idx]>0 ?
                                (
                                    <div className="flex border border-black border-solid rounded-md justify-evenly">
                                    {qty[idx]>0 &&<button className="w-4/12 text-sm font-bold text-center text-white bg-black my-19 rounded-l-md "  onClick={()=>add(idx,-1)} >-</button>}
                                    {qty[idx]>0 && <span className="w-4/12 font-bold text-center">{qty[idx]}</span>}
                                    { qty[idx]>0 &&<button className="w-4/12 text-sm font-bold text-center text-white bg-black my-19 rounded-r-md"  onClick={()=>add(idx,1)}>+</button>}

                                    </div>
                                ):<div></div>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>))
            }
        </div>
    )
}

export default ItemList;