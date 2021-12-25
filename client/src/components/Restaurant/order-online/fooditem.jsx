import React from"react";
import ReactStars from "react-rating-stars-component";
import {AiOutlinePlus} from "react-icons/ai";
const FoodItems=(props)=>{
    return (
        <>
        <div className="bg-white flex gap-3 w-full">
            <div className="w-28 h-24">
                <img 
                src={props.image}
                alt="food"
                 className="w-full h-full rounded-lg"  />
            </div>
            <div>
                <h3 className="font-semibold">{props.title}</h3>
                <ReactStars count={5} value={props.rating} />
                <h5>₹{props.price}</h5>
                <p className="truncate">{props.des}</p>
                </div>
            <div>
                <button className="flex items-center gap-2 text-Zomato-400 bg-gray-100 border border-Zomato-500 px-4 py-2 rounded-lg"><AiOutlinePlus /> Add</button>
            </div>
          
        </div>
        </>
    )
}
export default FoodItems;