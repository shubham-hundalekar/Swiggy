import {useState} from "react"
import ItemList from "./ItemList";
const RestaurantCategory = ({title, resMenu, showItems, setShowIndex})=>{
    const categoryList = resMenu?.title[title];
    //toggle feature
    const [displayList, setDisplayList]  = useState(true);
    
    const handleClick = ()=>{
        setDisplayList(showItems)
        setDisplayList(!displayList);    
        setShowIndex();
    }
    const [qty,setQty]=useState({});

    const add = (idx,temp)=>{
        console.log(idx)
       setQty(prv=>({...prv,[idx]:(prv[idx]||0)+temp}));

        console.log(qty);
    }

    return(
        <div>
            {/* header */}
            <div className="w-6/12 p-4 m-auto my-4 bg-gray-300 shadow-lg ">
                <div className="flex justify-between cursor-pointer" onClick={()=>handleClick()}>
                    <span className="text-lg font-bold ">{title}({categoryList.length})</span>
                    <span>▼</span>
                </div>
                {displayList || showItems && <ItemList qty={qty} handleAdd={add} itemList={categoryList} />}
            </div>
            
        </div>


    )
}
export default RestaurantCategory;