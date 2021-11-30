import React from "react";
import Navbar from "../components/Navbar";
import FoodTab from "../components/foodTab";
const HomeLayout =(props)=>{
return <> 
<Navbar />
<FoodTab />
<div className="m-4 p-4">
{props.children}
</div>
</>
};
export default HomeLayout;