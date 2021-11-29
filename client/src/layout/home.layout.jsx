import React from "react";
import Navbar from "../components/Navbar";
import FoodTab from "../components/foodTab";
const HomeLayout =(props)=>{
return <> 
<Navbar />
<FoodTab />
{props.children}
</>
};
export default HomeLayout;