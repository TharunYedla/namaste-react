import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";



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
    if(listOfRestaurants.length === 0){
      return <Shimmer/>;
    }

    return (
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>
                  {setsearchText(e.target.value);

                  }}/>
                <button onClick={() => {
                  console.log(searchText);
                const filteredRestaurant =  listOfRestaurants.filter(
                  (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) );

                  setFilteredRestaurant(filteredRestaurant);
                }}>Search</button>
              </div>
              <button className="filter-btn"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setListOfRestaurant(filteredList);
              }}
               >
                Top Rated Restaurants</button>
            </div>
            <div className="res-container">
           { filteredRestaurant.map((restaurant) => (<RestaurantCard key = {restaurant.info.id}
           resData={restaurant}/>)) }
            </div>
        </div>
    );
};