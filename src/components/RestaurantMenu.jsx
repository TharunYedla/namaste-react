
import { Shimmer } from "./Shimmer";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
 const RestaurantMenu = () => {

   
    const resInfo = useRestaurantMenu();
    
   
    if (resInfo === null)  return
        <Shimmer />;
    return (
        <div className="menu">
            <h1>{resInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name}</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Diet Coke</li>
                <li>KFC</li>
            </ul>
        </div>
    );
};
export default RestaurantMenu;