import React from "react";
import {TiStar} from "react-icons/ti"; 
const  MenuSimilarCard =(props)=>{
    
        return (<>
        <div className="bg-white shadow rounded-md w-24 w-64">
            <div className="w-full h-48">
                <img src={props.image}
                alt="food"
                className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-2 p-3">
                <h3 className=" font-semibold">{props.title}</h3>
                <div className="flex flex-col items-center text-sm ">
                    <div className="flex justify-between gap-2">
                  <span className="flex items-center gap-1">
                    <span className="flex items-center gap-1 bg-green-700 text-white text-xs px-2 py-1 rounded">
                        3
                        <TiStar />
                    </span>
                    Dining
                </span>
                <span className="w-2 h-4 border-r border-gray-500" />
                <span className="flex items-center gap-1">
                    <span className="flex items-center gap-1 bg-green-700 text-white text-xs px-2 py-1 rounded">
                        3
                        <TiStar />
                    </span>
                    Dining
                </span>
                </div>
                <div>
                <h4>street food,North indian</h4>
                </div>
                </div>
            </div>
        </div>
        </>
        )
    
}
export default MenuSimilarCard;