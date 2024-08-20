import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
export const Header = () => {
     
     const [btnNameReact, setbtnNameReact] = useState("Login");
     const onlineStatus = useOnlineStatus();

     const { loggedInUser} = useContext(UserContext);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
            <img className="w-56"
             src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
            />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" : "🔴" }
                    </li>
                    <li className="px-4"><Link to ="/home">Home
                    </Link></li>
                    <li className="px-4">
                        <Link to="/about">About Us
                        </Link></li>
                    <li className="px-4">
                        <Link to = "/contact"> Contact Us</Link></li>
                        <li className="px-4">
                            <Link to = "/grocery">Grocery</Link>
                        </li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={() =>{
                        btnNameReact === "Login"
                        ? setbtnNameReact ("Logout")
                        : setbtnNameReact ("Login");
                    }}>{btnNameReact}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>

    );
};