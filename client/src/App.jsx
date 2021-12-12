import HomeLayoutHoc from "./hoc/home.hoc";
import RestaurantLayoutHoc from "./hoc/Restaurant.hoc";
import React from "react";
import HomeLayout from "./layout/home.layout";
import { Route, Routes } from "react-router-dom";
import RestaurantLayout from "./layout/RestaurantLayout";
import Homex from "./Page/Home";
function App()
{ const Home =HomeLayoutHoc(Homex);
 return(
    <Routes>
         <Route  path="/" exact element={<RestaurantLayout ></RestaurantLayout>}/>
    <Route path="/:type" exact  element={<Home></Home>} />  
</Routes> 

 )
}
export default App;