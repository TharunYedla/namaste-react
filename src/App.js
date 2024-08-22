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
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import {Header} from './components/Header';
import { Body } from "./components/Body";
import { About } from "./About";
import { Contact } from "./Contact";
import { Error } from "./Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { UserContext } from "./utils/UserContext";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {

    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            name: "Tharun Kumar",
        };
        setUserName(data.name);
    },[]);
    return ( 
        <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="app">
        <Header/>
        <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
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
        },
        {
            path: "/grocery",
            element: ( <Suspense fallback= {<h1> Loading.....</h1>}>
                <Grocery />
                </Suspense>
                 ),
        },
        {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />
        },
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