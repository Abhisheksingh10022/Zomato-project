import React,{useState} from "react";

import RestaurantCard from "../../RestaurantCard";
const Dining=()=>{
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
        },{
            _id:"123456-7",
            photos:[
                "https://b.zmtcdn.com/data/pictures/3/18944863/b687347bc9a6fe561f7b1598dbf70d96_featured_v2.jpg"
            ],
            name:"Eden-Botanic kitchen",
            cuisine:["North Indian","chinese"],
            averageCost:400,
            isPro:false,
            isOff:30,
            durationOfdelivery:58,
            restaurantReviewvalue:3.7 
        }
        ,{
            _id:"123456-8",
            photos:[
                "https://b.zmtcdn.com/data/pictures/1/18935071/afae21e87d0e7a7c396e886856c39a6f_featured_v2.jpg"
            ],
            name:"Mc Donald's",
            cuisine:["Burger","Fast food","Beverages"],
            averageCost:400,
            isPro:false,
            isOff:30,
            durationOfdelivery:40,
            restaurantReviewvalue:3.4 
        }
        ,{
            _id:"123456-9",
            photos:[
                "https://b.zmtcdn.com/data/pictures/chains/9/18702629/da03d76ff625aa679d09b55dd1364beb_featured_v2.jpg"
            ],
            name:"Pahalwan's",
            cuisine:["North Indian","Street food","Beverages"],
            averageCost:400,
            isPro:false,
            isOff:30,
            durationOfdelivery:40,
            restaurantReviewvalue:4.2 
        }
        ,{
            _id:"123456-10",
            photos:[
                "https://b.zmtcdn.com/data/pictures/chains/8/18880478/9ee6101602467638dafc335c2a69d459_featured_v2.jpg"
            ],
            name:"KFC",
            cuisine:["Burger","Fast food","Beverages"],
            averageCost:500,
            isPro:false,
            isOff:30,
            durationOfdelivery:40,
            restaurantReviewvalue:4.3  
        }
        ,{
            _id:"123456-11",
            photos:[
                "https://b.zmtcdn.com/data/pictures/chains/3/19419133/9c5ec50575c1f1812ca09e77dd2b4195_featured_v2.jpg"
            ],
            name:"Subway",
            cuisine:["Healthy Food","Sandwich"],
            averageCost:500,
            isPro:false,
            isOff:30,
            durationOfdelivery:40,
            restaurantReviewvalue:3.9  
        }
        ,{
            _id:"123456-12",
            photos:[
                "https://b.zmtcdn.com/data/pictures/0/18816120/4e4d589a7ffa376cd4f37107112d44df_featured_v2.jpg"
            ],
            name:"KC 360",
            cuisine:["North Indian","Chinese Food"],
            averageCost:400,
            isPro:false,
            isOff:30,
            durationOfdelivery:50,
            restaurantReviewvalue:4.2 

        }

    ]);
    return(
        <>
        <h3 className="text-4xl  font-semibold">Dine-Out in jammu</h3>
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
export default Dining;