/**
 * 
 * <div id = "parent">
 * <div id = "child">
 * <h1> I'm a h1 tag</h1>
 * <h2> I'm a h2 tag</h2>
 * </div>
 * <div id ="child2">
 * <h1> I'm a h1 tag </h1>
 * <h2> I'm a h2 tag</h2>
 * </div>
 * </div>
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";

import {Header} from './components/Header';
import { Body } from "./components/Body";








const AppLayout = () => {
    return ( <div className="app">
        <Header/>
        <Body/>
    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);