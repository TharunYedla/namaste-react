import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Link } from "react-router-dom";
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
                    <li>
                        <Link to="/about">About Us
                        </Link></li>
                    <li>
                        <Link to = "/contact"> Contact Us</Link></li>
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