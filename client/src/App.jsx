import HomeLayoutHoc from "./hoc/home.hoc";
import RestaurantLayoutHoc from "./hoc/Restaurant.hoc";
import React from "react";
import HomeLayout from "./layout/home.layout";
import { Route, Routes } from "react-router-dom";
import RestaurantLayout from "./layout/RestaurantLayout";
import Homex from "./Page/Home";
import Overviewx from "./Page/Restaurant/overview";
function App()
{ const Overview=RestaurantLayoutHoc(Overviewx);
     const Home=HomeLayoutHoc(Homex);
 return(
    <Routes>
         <Route  path="/" exact element={<Home></Home>}/>
   <Route path="/:type" exact  element={<Home></Home>} />  
   <Route path="/restaurant" exact element={<RestaurantLayout></RestaurantLayout>} />
    <Route path="/restaurant/overview" exact element={<Overview></Overview>} />
    <Route path="/restaurant/order-online" exact element={<RestaurantLayout></RestaurantLayout>} />
    <Route path="/restaurant/Review" exact element={<RestaurantLayout></RestaurantLayout>} />
    <Route path="/restaurant/Menu" exact element={<RestaurantLayout></RestaurantLayout>} />
    <Route path="/restaurant/photos" exact element={<RestaurantLayout></RestaurantLayout>} />
</Routes> 

 )
}
export default App;