import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json?.data);
    }

    if(resInfo === null) return <Shimmer />

    const {name, cuisines, costForTwo} = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    //add menu sections

    return (
        <div>
            <h1>{name}</h1>
            <h4>{cuisines.join(", ")} - {costForTwo}</h4>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>
                <li key={item?.card?.info?.id}>
                    {item?.card?.info?.name} - 
                    Rs.{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>
                )}
            </ul>
        </div>
    );
}

export default RestaurantMenu;