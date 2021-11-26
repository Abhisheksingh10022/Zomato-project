import React from "react";
import{RiShoppingBag3Line} from "react-icons/ri";
import {MdOutlineDeliveryDining} from "react-icons/md";
import {BiDrink} from "react-icons/bi";
import {IoNutritionSharp} from "react-icons/io5";
const MobileTab=()=>{
    return <>
<div className=" w-full bg-white shadow-lg p-3 fixed bottom-0 z-10 flex items-center justify-between text-gray-500 border md:justify-evenly">
    <div className="flex flex-col items-center text-xl">
<RiShoppingBag3Line />
<h5 className="text-lg">Delivery</h5>
</div>
<div className="flex flex-col items-center text-xl">
<MdOutlineDeliveryDining />
<h5 className="text-lg">Dining out</h5>
</div>
<div className="flex flex-col items-center text-xl">
<BiDrink />
<h5 className="text-lg">Night life</h5>
</div>
<div className="flex flex-col items-center text-xl">
<IoNutritionSharp />
<h5 className="text-lg">Nutrition</h5>
</div>
</div>
    </>

}
const LargeFoodTab=()=>{
    return <>
    <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 px-32">
           <div className="w-12 h-12 bg-gray-200 p-1 rounded-full">
               <img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
               alt="delivery"
               className="w-full h-full"
               />
               </div>
                <h3 className="text-xl text-gray-700 font-semibold">Delivery</h3>
        </div>
        <div className="flex items-center gap-3 px-12">
           <div className="w-12 h-12 bg-gray-200 p-1 rounded-full">
               <img src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
               alt="dining out"
               className="w-full h-full"
               />
               </div>
                <h3 className="text-xl text-gray-700 font-semibold">Dining Out</h3>
        </div>
    </div>
    </>
}
const FoodTab =()=>{
return <>
<div className="lg:hidden sm:flex">
    <MobileTab />
</div>
<div className="hidden lg:flex">
<LargeFoodTab />
</div>
</>

}
export default FoodTab;