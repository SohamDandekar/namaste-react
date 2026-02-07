import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setfilteredListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
      
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");    
        const json =  await response.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(listOfRestaurants.length === 0){
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="searchBar" value={searchText} 
                    onChange={(e) => setSearchText(e.target.value)} />
                    <button className="search-btn" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setfilteredListOfRestaurants(filteredList);
                    }}>
                        Search
                    </button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = filteredListOfRestaurants.filter(res => res.info.avgRating >= 4);
                        setfilteredListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
                <button className="clear-filter-btn" onClick={()=>{
                    setfilteredListOfRestaurants(listOfRestaurants);
                    setSearchText("");
                }}>Clear All Filters</button>
            </div>
            <div className="res-container">
                {
                filteredListOfRestaurants.map((resCard) => (
                    <RestaurantCard key={resCard.info.id} resData={resCard}/>
                ))
                }
            </div>
        </div>
    )
};

export default Body;