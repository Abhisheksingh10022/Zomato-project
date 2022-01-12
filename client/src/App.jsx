import HomeLayoutHoc from "./hoc/home.hoc";
import RestaurantLayoutHoc from "./hoc/Restaurant.hoc";
import React from "react";
import HomeLayout from "./layout/home.layout";
import { Route, Routes } from "react-router-dom";
import RestaurantLayout from "./layout/RestaurantLayout";
import Homex from "./Page/Home";
import Overviewx from "./Page/Restaurant/overview";
import OrderOnlinex from "./Page/Restaurant/order-online";
import Reviewx from "./Page/Restaurant/reviews";
import MenuX from "./components/Restaurant/Menucollection";
import PhotosX from "./components/Restaurant/photos";
function App()
{ const Overview=RestaurantLayoutHoc(Overviewx);
     const Home=HomeLayoutHoc(Homex);
     const OrderOnline=RestaurantLayoutHoc(OrderOnlinex);
     const Reviews=RestaurantLayoutHoc(Reviewx);
     const Menu=RestaurantLayoutHoc(MenuX);
     const Photos =RestaurantLayoutHoc(PhotosX);
 return(
    <Routes>
        <Route  path="/" exact element={<Home></Home>}/>
   <Route path="/:type" exact  element={<Home></Home>} />  
   <Route path="/restaurant" exact element={<RestaurantLayout></RestaurantLayout>} />
    <Route path="/restaurant/overview" exact element={<Overview></Overview>} />
    <Route path="/restaurant/order-online" exact element={<OrderOnline></OrderOnline>} />
    <Route path="/restaurant/Review" exact element={<Reviews />} />
    <Route path="/restaurant/Menu" exact element={<Menu />} />
    <Route path="/restaurant/photos" exact element={<Photos />} />
</Routes> 

 )
}
export default App;