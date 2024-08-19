

 const RestaurantCard = (props) => {
    const { resData } = props;

    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg"
            alt="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} />
        <h3 className="font-bold py-4 text-lg"> {resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(",")}</h4>
        <h4>{resData.info.avgRating}stars</h4>
        <h4>{resData.info.deliveryTime}</h4>
        </div>
    );
};
export default RestaurantCard;
