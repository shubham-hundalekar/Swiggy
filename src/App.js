import React, {lazy, Suspense, useEffect, useState} from "react";
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
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
import {Provider} from "react-redux"
import appStore from "./utils/appStore";

const Grocery = lazy(()=>import("./components/Grocery"));

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
  const [userName, setUserName] = useState();
  useEffect(()=>{
    const data = {
      name:"Shubham Hundalekar"
    }
    setUserName(data.name);
  },[])
    return(
        <div className="app">
            <Provider store = {appStore}>
              <UserContext.Provider value={{logInUser:userName, setUserName}}>
                <HeaderComponent/> 
                <Outlet/>
              </UserContext.Provider>
            </Provider>
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
        path:"/grocery",
        element:<Suspense fallback= {<h1>Loading...</h1>}>
                  <Grocery/>
                </Suspense>,
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


