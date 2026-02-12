import { useSelector, useDispatch } from "react-redux"
import ItemList from "./ItemList";
import {clearCart} from "../utils/cartSlice"


const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items)
    console.log(cartItems)
    let i=0;
    const dispatch = useDispatch();
    const clearCartItems = ()=>{
        dispatch(clearCart());
    }
    return(
        <div className="w-6/12 m-auto text-center">
            <div className="m-2 text-2xl font-bold">Cart</div>
            <button className="p-2 bg-blue-300 rounded-md hover:bg-blue-400" onClick={clearCartItems}>Clear Cart</button>
            {cartItems.length === 0 ? <div>Cart is empty</div>:<ItemList key={i++} qty={""} handleAdd={""} itemList={cartItems} />}
        </div>
    )
}
export default Cart