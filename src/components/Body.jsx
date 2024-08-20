import React, { useEffect, useContext} from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";



export const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState([]);
    

    useEffect ( () => {
        fetchData();

    }, []
    );

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
      return (
    <h1>
      Looks like you're offline!! Check your internet connection...
    </h1>
    );

    const {loggedInUser,setUserName} = useContext(UserContext);

    if(listOfRestaurants.length === 0){
      return <Shimmer/>;
    }

    return (
        <div className="body">
            <div className="filter flex">
              <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black" 
                value={searchText} onChange={(e)=>
                  {setsearchText(e.target.value);

                  }}/>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
                onClick={() => {
                  console.log(searchText);
                const filteredRestaurant =  listOfRestaurants.filter(
                  (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) );

                  setFilteredRestaurant(filteredRestaurant);
                }}>Search</button>
              </div>
              <div className="search m-4 p-4 flex items-center">
              <button className="px-4 py-2 bg-gray-100 rounded-lg"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setListOfRestaurant(filteredList);
              }}
               >
                Top Rated Restaurants</button>
              </div>
              <div className="search m-4 p-4 flex items-center">
                <label>UserName :</label>
                <input className="border border-black p-2"
                value = {loggedInUser}
                onChange={(e)=> setUserName(e.target.value)}/>
                 
              </div>
              
            </div>
            <div className="flex flex-wrap">
           { filteredRestaurant.map((restaurant) => (<RestaurantCard key = {restaurant.info.id}
           resData={restaurant}/>)) }
            </div>
        </div>
    );
};