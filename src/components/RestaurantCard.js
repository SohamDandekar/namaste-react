import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } = resData?.info;
    const { deliveryTime } = sla;

    return (
        <div data-testid="resCard" className="p-4 m-4 flex w-[250px] flex-wrap rounded-lg shadow-md flex-col bg-blue-200 hover:bg-blue-300 hover:shadow-xl">
            <img src={CDN_URL + cloudinaryImageId}
            alt="res-logo"
            className="h-52 w-56 rounded-lg"/>
            <h3 className="font-bold text-lg py-3">{name}</h3>
            <h4 className="cuisine">{cuisines.join()}</h4>
            <h4>{deliveryTime} Mins</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
};

export const withVegLabel = () => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-400 text-white font-bold m-2 p-2 rounded-lg">Pure Veg</label>
                <RestaurantCard {...props}/>
            </div>
        );
    }
}

export default RestaurantCard;