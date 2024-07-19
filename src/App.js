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
import { About } from "./About";
import { Contact } from "./Contact";
import { Error } from "./Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
    return ( <div className="app">
        <Header/>
        <Outlet />
    </div>
    );
};

const appRouter = createBrowserRouter( [
{
    path: "/",
    element: <AppLayout />,
    children:[
        {
        path: "/",
        element: <Body />
    },
        {
            path: "/about",
            element: <About />
        }, 
        {
            path: "/contact",
            element: <Contact />
        } 
    ],
    errorElement: <Error />
},
{
    path: "/about",
    element: <About />
}, 
{
    path: "/contact",
    element: <Contact />
}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);