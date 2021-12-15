import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineArrowRight} from "react-icons/ai";
import MenuCollection from "../../components/Restaurant/Menucollection";
import MenuSimilarCard from "../../components/Restaurant/Menusimilarcard";
const Overview =()=>{
    return(
        <>
        <div className="flex flex-col md:flex-row ">
            <div className="w-full  shadow-xl">
                <h2 className="font-semibold text-lg md:text-xl">About this place</h2>
                <div className="flex justify-between items-center">
                    <h4 className="text-lg font-medium">Menu</h4>
                    <Link to={`/restaurant/menu`}>
                    <span className="flex items-center gap-1 text-Zomato-400">see all menu <AiOutlineArrowRight /></span>
                    </Link>
                
                </div>
                <div className="flex flex-wrap gap-3 my-4">
                        <MenuCollection menuTitle="Menu" pages="3" image="https://b.zmtcdn.com/data/menus/629/18702629/8de5ca03c1ba002e21d34d54a5a6835f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" />
                    </div>
                    <h4 className="text-lg font-medium my-4">cuisines</h4>
                    <div className="flex flex-col  gap-2 w-32">
                        <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full w-full">
                            street food
                        </span>
                      <div className="my-4">
                        <h4 className="text-lg font-medium">Average Cost</h4>
                           <h6>100 for one order (approx.)</h6>
                           <small className="text-gray-500">
                               Exclusive of applicable taxes and charges,if any
                               </small>
                        </div>
                        </div>
                     <div className="my-4">
                         <h4 className="text-lg font-medium">Similar Restaurants</h4>
                         <MenuSimilarCard image="https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360" title="aalu gobi" />
                         </div>   
                </div>
                <aside
                style={{height:"fit-content"}}
                 className="hidden md:block md:w-2/5 fixed sticky top-2 bg-green-200 p-3 shadow-xl">
                </aside> 
        </div>

        </>
    )
}
export default Overview;