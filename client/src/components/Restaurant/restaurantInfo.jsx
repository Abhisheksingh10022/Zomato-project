import React from "react";
import {AiFillStar} from "react-icons/ai";
const RestaurantInfo=(props)=>{
    return (
        <>
           <div className="my-4">
                 <div className="flex flex-col flex-col-reverse  md:flex-row  md:items-center justify-between gap-3">
                   <h1 className="text-xl md:text-3xl font-semibold md:font-bold">{props.name}</h1>  
                   <div className="flex items-center gap-6 text-xs md:text-base">
                       <div className="flex items-center gap-2">
                           <span className="flex items-center gap-1 text-white font-medium bg-green-600 px-2 py-1 rounded-lg">4.2<AiFillStar /></span>
                           <span>
                              <strong>{props.restaurantRating}</strong>
                              <p className=" border-dashed border-b">Dining Reviews</p>
                               </span>
                       </div>
                       <div className="flex items-center gap-2">
                  
                       <span className="flex items-center gap-1 text-white font-medium bg-green-600 px-2 py-1 rounded-lg">4.2<AiFillStar /></span>
                           <span>
                              <strong>{props.deliveryRating}</strong>
                              <p className=" border-dashed border-b">Deliver Reviews</p>
                               </span>
                       </div>
                   </div>

                 </div>
                 <div className="text-base md:text-lg text-gray-600" >
                     <h3>{props.quisine}</h3>
                     <h3>{props.address}</h3>
                     <h3><span className="text-yellow-500">Open Now</span> - 11am - 8pm</h3>
                 </div>
             </div>
       
        </>

    )
}
export default RestaurantInfo;