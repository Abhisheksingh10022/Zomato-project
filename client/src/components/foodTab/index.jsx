import React,{useState,useEffect} from "react";
import { useParams ,Link} from "react-router-dom";
import{RiShoppingBag3Line} from "react-icons/ri";
import {MdOutlineDeliveryDining} from "react-icons/md";
import {BiDrink} from "react-icons/bi";
import {IoNutritionSharp} from "react-icons/io5";

const MobileTab=()=>{
    const [allTypes,setAlltypes]=useState([
        {
        id:"delivery",
        icon:<RiShoppingBag3Line />,
        name:"Delivery",
      
    },
    {
      id:"dining",
      icon:<MdOutlineDeliveryDining />,
      name:"Dining out",
  
  },
  {
      id:"nightLife",
      icon:<BiDrink />,
      name:"Night life",
    
  },
  {
      id:"nutrition",
      icon:<IoNutritionSharp />,
      name:"Nutrition",
     
  },
  
  ]);
   const {type}=useParams();
    return (
        <>
  <div className=" w-full bg-white shadow-lg p-3 fixed bottom-0 z-10 flex items-center justify-between text-gray-500 border md:justify-evenly">
     {
         allTypes.map(items=>{
             return(
                 <Link to={`/${items.id}`}>
            <div className={type==items.id ?"flex flex-col items-center text-xl text-Zomato-400 border-t-2 border-Zomato-400":"flex flex-col items-center text-xl"}>
                {items.icon}
                <h5>{items.name}</h5>
                 </div>
              </Link>
             );
         }
         
         )
         
         
        }
          </div>    
  </>
    )
 }

        
     
const LargeFoodTab=()=>{
    const [alltypes,SetAllTypes]=useState([
        {
        id:"delivery",
       imgDefault:"https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
       imageActive:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
       name:"Delivery",
       active:"yellow"
        },
        {
            id:"dining",
            imageDefault:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
            imageActive:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            name:"Dining out",
            active:"blue"
        }
    ]);
    const {type}=useParams();
return (

    <div className="flex items-center gap-3 container px-20 mx-auto">
        {
            alltypes.map(items=>{
                return(
                    <Link to={`/${items.id}`}>
        <div className={type===items.id?"flex items-center gap-3 px-32 border-b-2 border-Zomato-400 p-4 transition duration ease-in-out":"flex items-center gap-3 px-32"}>
           <div className={`w-12 h-12 bg-${type===items.id?items.active:"gray"}-100 p-1 rounded-full`}>
             <img  src={type===items.id?items.imageActive:items.imageDefault} className="w-full h-full " />
        </div>
        <h3 className={type===items.id?"text-xl  font-semibold text-Zomato-400  ":"text-xl text-gray-700 font-semibold "}>{items.name}</h3>
        </div>
        </Link>
                )
    
            }
            )
        }
        </div>

    
        
        )
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