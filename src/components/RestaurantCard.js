import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } = resData?.info;
    const { deliveryTime } = sla;

    return (
        <div className="res-card" style={{backgroundColor:"lightblue"}}>
            <img src={CDN_URL + cloudinaryImageId}
            alt="res-logo"
            className="res-logo"/>
            <h3>{name}</h3>
            <h4 className="cuisine">{cuisines.join()}</h4>
            <h4>{deliveryTime} Mins</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
};

export default RestaurantCard;