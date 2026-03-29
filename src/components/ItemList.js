import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (e,item) => {
        // To stop event bubbling
        e.stopPropagation();
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item)=>(
            <div className="p-2 m-2 text-left border-gray-300 border-b-2 flex justify-between" key={item?.card?.info?.id}>
                <div className="w-9/12">
                    <div className="py-2">
                        <span>{item?.card?.info?.name}</span>
                        <span> - ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">{item?.card?.info?.description}</p>
                </div>
                <div className="w-3/12">
                <div className="absolute">
                    <button className="bg-gray-100 text-black mx-0 my-[94px] p-2 shadow-lg rounded-lg" onClick={(e) => handleAddItem(e, item)}>
                        Add +
                    </button>
                </div>
                <img src={CDN_URL + item?.card?.info?.imageId}/>
                </div>
            </div>))}
        </div>
    );
}

export default ItemsList;