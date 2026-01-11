import {useState} from "react"
import ItemList from "./ItemList";
const RestaurantCartegory = (props)=>{
    const [showItems, setShowItems] = useState(false);
    const title = props.title;
    const categoryList = props.resMenu
    //toggle feature
    const handleClick = ()=>{
        setShowItems(!showItems);
    }

    return(
        <div>
            {/* header */}
            <div className="w-6/12 p-4 m-auto my-4 bg-gray-100 shadow-lg ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="text-lg font-bold ">{title}({categoryList.length})</span>
                    <span>▼</span>
                </div>
                {showItems && <ItemList itemList={categoryList} />}
            </div>
            
        </div>


    )
}
export default RestaurantCartegory;