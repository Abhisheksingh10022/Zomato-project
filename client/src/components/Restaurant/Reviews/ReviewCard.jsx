import React from"react";
import {AiFillStar} from "react-icons/ai";
const ReviewCard =()=>{
    return (
        <>
        <div className="flex flex-col gap-3">
            <hr />
            <div className="flex items-center justify-between mt-8">
                <div className="flex   items-center gap-2">
                <div className="w-12 h-12 rounded-full">
                    <img src="https://b.zmtcdn.com/data/user_profile_pictures/4cc/e25ce81515c9c883045f8db4a92834cc.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                    alt="avatar"
                    className="w-full h-full rounded-full object-cover"
                    />
                </div>
                <div className="flex flex-col items-center gap-2">  
                    <h3 className="text-lg font-semibold">Kanul Sharma</h3>
                    <small className="text-gray-500">5 Reviews  3 Followers</small>
                </div>
                </div>
                <button className="text-Zomato-400 border border-Zomato-400 rounded-lg px-2 py-2">Follow</button>
            </div>
            <div>
                <div className="flex items-center gap-3">
                    <span className="text-white text-sm bg-green-700 px-2 py-1 rounded-lg flex items-center">3 <AiFillStar /></span>
               <h5 className="font-regular uppercase">Delivery</h5>
               <small className="text-gray-500" >3 days ago</small>
                </div>
                <div className="w-full text-gray-600 font-light" >  
                    <p className="w-full text-gray-700 font-light text-base">
                    Lassi was less this time. Please measure it next time
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
export default ReviewCard;