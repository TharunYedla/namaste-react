

 const RestaurantCard = (props) => {
    const { resData } = props;

    return(
        <div className="res-card" style={{background: "#f0f0f0" }}>
            <img className="res-logo"
            alt="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} />
        <h3> {resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(",")}</h4>
        <h4>{resData.info.avgRating}stars</h4>
        <h4>{resData.info.deliveryTime}</h4>
        </div>
    );
};
export default RestaurantCard;
