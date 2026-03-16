import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOfflineStatus from "../utils/useOfflineStatus";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setfilteredListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        //https://corsproxy.io/?url=
        const response = await fetch("https://namastedev.com/api/v1/listRestaurants");    
        const json =  await response.json();
        setListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const offlineStatus = useOfflineStatus();

    if(!offlineStatus){
        return <h1>Looks like you're offline!! Please check your internet connection!!</h1>
    }

    if(listOfRestaurants.length === 0){
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="flex items-center">
                <div className="m-2">
                    <input type="text" className="m-4 border border-solid border-black" value={searchText} 
                    onChange={(e) => setSearchText(e.target.value)} />
                    <button className="px-4 py-1 m-4 bg-amber-200 rounded-md" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setfilteredListOfRestaurants(filteredList);
                    }}>
                        Search
                    </button>
                </div>
                <button className="px-4 py-1 m-4 bg-amber-200 rounded-md"
                    onClick={() => {
                        const filteredList = filteredListOfRestaurants.filter(res => res.info.avgRating >= 4);
                        setfilteredListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
                <button className="px-4 py-1 m-4 bg-amber-200 rounded-md" onClick={()=>{
                    setfilteredListOfRestaurants(listOfRestaurants);
                    setSearchText("");
                }}>Clear All Filters</button>
            </div>
            <div className="p-1 m-1 flex flex-wrap">
                {
                filteredListOfRestaurants.map((resCard) => (
                    <Link key={resCard.info.id} to={"/restaurants/"+resCard.info.id}><RestaurantCard resData={resCard}/></Link>
                ))
                }
            </div>
        </div>
    )
};

export default Body;