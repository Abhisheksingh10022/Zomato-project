import React,{useState} from "react";
import DeliveryCarousel from "./DeliveryCarousel";
import Brand from "./Brand";
import RestaurantCard from "../../RestaurantCard";
const Delivery=()=>{
    const [RestaurantList,setRestaurnatlist]=useState([
        {
     _id:"123456",
     photos:[
         "https://b.zmtcdn.com/data/pictures/chains/7/19073197/7dfd32c0d1cde6e41c32be07b3153c0a.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
     ],
     name:"SK Amritsari Kulcha Hut",
     cuisine:["North Indian","Beverages"],
     averageCost:100,
     isPro:true,
     isOff:80,
     durationOfdelivery:47,
     restaurantReviewvalue:3.9
        },
        {
            _id:"123456-2",
     photos:[
         "https://b.zmtcdn.com/data/pictures/7/18848357/007b6a6e20cf08720fb85f68e5446516.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
     ],
     name:"Pradhan Snacks",
     cuisine:["North Indian"],
     averageCost:100,
     isPro:false,
     isOff:0,
     durationOfdelivery:47,
     restaurantReviewvalue:3.7
        },
        {
            _id:"123456-3",
            photos:[
                "https://b.zmtcdn.com/data/pictures/5/18800025/4ad9cc9cb2bc33b16f7478d9ec2c1539.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name:"Pradhan Snacks",
            cuisine:["North Indian","chinese","South indian","Fast Food"],
            averageCost:100,
            isPro:true,
            isOff:10,
            durationOfdelivery:47,
            restaurantReviewvalue:3.3
        },
        {
            _id:"123456-4",
            photos:[
                "https://b.zmtcdn.com/data/pictures/chains/7/18825237/4004a47fb2f7c02bfa70a529b1514030.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name:"Salsa Fast Food",
            cuisine:["North Indian","chinese","South indian","Fast Food"],
            averageCost:100,
            isPro:true,
            isOff:30,
            durationOfdelivery:47,
            restaurantReviewvalue:3.3
        },
        {
            _id:"123456-5",
            photos:[
                "https://b.zmtcdn.com/data/pictures/0/18945320/27fd0a080d5f67307b6ba48efdd60546_o2_featured_v2.jpg?output-format=webp"
            ],
            name:"The Grand Hill",
            cuisine:["North Indian","chinese","Kashmiri","Fast Food"],
            averageCost:150,
            isPro:true,
            isOff:30,
            durationOfdelivery:56,
            restaurantReviewvalue:3.3
        }
        ,{
            _id:"123456-6",
            photos:[
                "https://b.zmtcdn.com/data/pictures/chains/0/19041480/6c1d8f2952f7369ba14aa4014ee2693a_o2_featured_v2.jpg?output-format=webp"
            ],
            name:"Kaka Di Rasoi",
            cuisine:["North Indian","chinese"],
            averageCost:150,
            isPro:true,
            isOff:30,
            durationOfdelivery:58,
            restaurantReviewvalue:3.7 
        }

    ]);
    return(
        <>
        <DeliveryCarousel />
        <Brand />
        <h3 className="text-xl  font-semibold">Pallanwala Restaurants,Jammu</h3>
        <div className="flex justify-between flex-wrap">
      {RestaurantList.map((restaurant)=>{
          return(
       <RestaurantCard {...restaurant} key={restaurant._id} />
          )
      })

       }
        </div>
      
        </>
    )
}
export default Delivery;