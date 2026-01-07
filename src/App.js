import React from "react";
import ReactDOM from "react-dom/client";
const root  = ReactDOM.createRoot(document.getElementById("root"));
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart"
import Error from "./components/Error";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu";
/*
Header
  -Logo
  -Nav items
Body
  -Search
  -RestaurantComponent
    -Restaurant Card
Footer
  -Copyright
  -Link
  -Address
  -Contact
  */
 
const AppComponent = () =>{
    return(
        <div className="app">
            <HeaderComponent/>
            <Outlet/>
        </div>

    )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppComponent/>,
    children:[
      {
        path:"/",
        element:<BodyComponent/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/cart",
        element:<Cart/>
      },
     
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }
      
    ],
    errorElement:<Error/>,
  }
]) 


root.render(<RouterProvider router={appRouter}/>);


