import React from "react";
import FloatMenubtn from "../../components/Restaurant/order-online/FloatMenubtn";
import MenuList from "../../components/Restaurant/order-online/MenuList";
import {AiOutlineCompass} from "react-icons/ai";
import {BiTimeFive} from"react-icons/bi";
import FoodItems from "../../components/Restaurant/order-online/fooditem";
import FoodList from "../../components/Restaurant/order-online/foodList";
const OrderOnline=()=>{
    return(
        <>
        <div className="w-full  flex gap-2">
            <aside className="hidden md:flex flex-col gap-3 border-gray-200 w-1/4">
              <MenuList />
            </aside>
          
            <div className="w-full md:w-3/4 flex flex-col items-start gap-2 ">
            <div className="flex flex-col  gap-1">
            <h2 className="text-xl font-semibold">Order online</h2>
            <div className="flex items-center">
            <h4 ><AiOutlineCompass /> </h4>
              <div>Live track your order</div>
              </div>
              </div>
              <div className="flex h-screen flex-col gap-4" >
             <FoodList 
             title="Recommended"
             items={[
               {
                 price:"100",
                 rating:3,
                 des:"pahalwan ki aloo puri",
                 title:"Aloo puri",
                 image:"https://b.zmtcdn.com/data/dish_photos/707/cf8f17c564492e9aaf14d0cf62456707.jpg?fit=around|130:130"
               },
               {
                price:"100",
                rating:3,
                des:"pahalwan ki aloo puri",
                title:"Aloo puri",
                image:"https://b.zmtcdn.com/data/dish_photos/707/cf8f17c564492e9aaf14d0cf62456707.jpg?fit=around|130:130"
              },

             ]}
             />
              <FoodList 
             title="Burger"
             items={[
               {
                 price:"100",
                 rating:3,
                 des:"pahalwan ki aloo puri",
                 title:"Aloo puri",
                 image:"https://b.zmtcdn.com/data/dish_photos/707/cf8f17c564492e9aaf14d0cf62456707.jpg?fit=around|130:130"
               },
               {
                price:"100",
                rating:3,
                des:"pahalwan ki aloo puri",
                title:"Aloo puri",
                image:"https://b.zmtcdn.com/data/dish_photos/707/cf8f17c564492e9aaf14d0cf62456707.jpg?fit=around|130:130"
              },

             ]}
             />
              <FoodList 
             title="Pizza"
             items={[
               {
                 price:"100",
                 rating:3,
                 des:"pahalwan ki aloo puri",
                 title:"Aloo puri",
                 image:"https://b.zmtcdn.com/data/dish_photos/707/cf8f17c564492e9aaf14d0cf62456707.jpg?fit=around|130:130"
               },
               {
                price:"100",
                rating:3,
                des:"pahalwan ki aloo puri",
                title:"Aloo puri",
                image:"https://b.zmtcdn.com/data/dish_photos/707/cf8f17c564492e9aaf14d0cf62456707.jpg?fit=around|130:130"
              },

             ]}
             />
              </div>
            
            </div>
        </div>
        <FloatMenubtn />
        </>
    )
}
export default OrderOnline;