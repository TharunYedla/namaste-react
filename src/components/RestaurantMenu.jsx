 import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
 const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() =>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=25620");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };
   
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