import React from "react";
import { AiFillStar} from "react-icons/ai";
import {BiRupee} from "react-icons/bi";

const RestaurantCard=()=>{
    return (
        <>
        <div className=" flex flex-col gap-2">
            <div className="text-xl font-semibold ">Order from your favourite restaurant</div>
            <div>
        <div className="bg-white p-2 rounded-lg  sm:w-1/2 lg:w-1/3 flex flex-col gap-3 s hover:shadow ">
            <div className=" w-full h-56">
                <img src="https://b.zmtcdn.com/data/pictures/0/19696700/df199718c83d159a4bed17c42d68b3fc_o2_featured_v2.jpg?output-format=webp"
                alt=""
                className="w-full h-full rounded-lg" />
            </div>
             <div className="flex flex-col gap-2 ">
                 <div className="flex justify-between">
                 <h4 className=" font-medium text-xl">  Jani Sweets and Snacks </h4>
                 <span className="bg-black flex items-center text-white">4.1<AiFillStar /></span>
                 </div>
                 <div className="flex justify-between">
                 <p className="text-sm text-gray-500" >Mithai,Street Food,North Indian</p>
                 <span className="flex items-center"><BiRupee />350</span>
                 </div>
             </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default RestaurantCard;