import {useState} from "react";
import { useDispatch } from "react-redux";
import {addItem, removeItem} from "../utils/cartSlice"
const ItemList = ({qty, handleAdd, itemList})=>{
    // const itemList = itemList;
    const dispatch = useDispatch()
    const add = (idx,temp, res)=>{
        handleAdd(idx,temp)
        if(temp == -1)
            dispatch(removeItem())
        else 
            dispatch(addItem(res))

    }
    
    return (
        <div className="">
            {
                itemList.map((res,idx)=>(<div className="my-1 border-b-2 border-gray-200" key={res.id}>
                    <div className="bg-gray-100 ">
                        <div className="flex justify-between p-2 text-left">
                             <div>
                                <span>{res.name}</span> - Rs.<span>{res.costForTwo}</span>
                            </div>
                            <div className="justify-center p-2 ">
                                <img className="w-[100px]  " src="https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?cs=srgb&dl=close-up-cooking-dinner-46239.jpg&fm=jpg" alt="" />
                                {!qty[idx] && <button className="w-full text-sm font-bold text-center text-white bg-black rounded-md my-19 py-1" onClick={()=>add(idx,1, res)}>ADD</button>}
                                {
                                qty[idx]>0 ?
                                (
                                    <div className="flex border border-black border-solid rounded-md justify-evenly">
                                    {qty[idx]>0 &&<button className="w-4/12 text-sm font-bold text-center text-white bg-black my-19 rounded-l-md "  onClick={()=>add(idx,-1, res)} >-</button>}
                                    {qty[idx]>0 && <span className="w-4/12 font-bold text-center">{qty[idx]}</span>}
                                    {qty[idx]>0 &&<button className="w-4/12 text-sm font-bold text-center text-white bg-black my-19 rounded-r-md"  onClick={()=>add(idx,1, res)}>+</button>}

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