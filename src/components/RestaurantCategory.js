import ItemsList from "./ItemList";

const RestaurantCategory = ({data, showItems, index, setShowIndex}) => {

    const handleClick = () => {
        showItems ? setShowIndex(null) : setShowIndex(index);
    }

    return(
        <div>
            <div className="mx-auto w-6/12 bg-gray-100 my-2 p-4 rounded-lg shadow-md" onClick={handleClick}>
                <div className="flex justify-between">
                    <span className="font-bold text-lg">{data?.title} ({data?.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {showItems && <ItemsList items={data?.itemCards}/>}
            </div>
        </div>
    );
}

export default RestaurantCategory;