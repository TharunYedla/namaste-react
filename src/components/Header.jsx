import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
export const Header = () => {
     
     const [btnNameReact, setbtnNameReact] = useState("Login");
    return (
        <div className="Header">
        <div className="logo-container">
            <img className="logo"
             src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
            />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() =>{
                        btnNameReact === "Login"
                        ? setbtnNameReact ("Logout")
                        : setbtnNameReact ("Login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>

    );
};