import React from "react";
import FoodItems from "./fooditem";
const FoodList=(props)=>{
    return(
        <>  
         <div  >
           <h2 className="bg-white top-0 w-full px-2 py-1 z-10 sticky text-xl font-semibold ">{props.title}</h2>
          <div className="flex flex-col gap-4">
            {     
            props.items.map((item)=>{
                return(
                  
               <FoodItems
               {...item}
               />
              
                )
            })
            
            }
            </div>
               </div>
        </>
    )
}
export default FoodList;