import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if(resInfo === null) return <Shimmer />
    console.log(resInfo)

    const {name, cuisines, costForTwo} = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => category?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="text-center my-6">
            <h1 className="text-2xl font-bold">{name}</h1>
            <h4 className="text-lg my-4 font-bold">{cuisines.join(", ")} - {costForTwo}</h4>
            {categories.map((category, index) => 
            <RestaurantCategory key={category?.card?.card?.title} 
            data={category?.card?.card}
            showItems={index === showIndex}
            index={index}
            setShowIndex={setShowIndex}/>)}
        </div>
    );
}

export default RestaurantMenu;