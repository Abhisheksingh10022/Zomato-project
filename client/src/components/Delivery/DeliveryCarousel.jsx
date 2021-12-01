import React from "react";
import DeliveyCategory from "./DeliveryCategory";
import slider from "react-slick";
import Slider from "react-slick";
const DeliveryCarousel =()=>{

const categories=[{
    image:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
    title:"Paratha"
},
{
    image:"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
    title:"Momos"
},
{
   image:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
   title:"Rolls" 
},
{image:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
title:"sandwich"

},
{
    image:"https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png",
    title:"Chole Bhature"
}
,{
    image:"https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png",
    title:"Fries"
},
{
    image:"https://b.zmtcdn.com/data/o2_assets/9cf8166717d81ec3212d0707a06749f91634401116.png",
    title:"pasta"
}
,{
    image:"https://b.zmtcdn.com/data/o2_assets/f9d277eb1668d7abf9235302402b06001632716602.png",
    title:"Kachori"
}
];
const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

    return(
        <>
        <h1 className="text-xl font-semibold">Inspiration for your first order </h1>
        <div className="  lg:hidden flex flex-wrap gap-3 justify-between my-4">
        {
           categories.map((item)=>{
               return(
               <DeliveyCategory {...item} />
               )
           }) 
        }
        </div>
        <div className="hidden lg:block">
   <Slider {...settings} >
       {
         categories.map((item)=>{
            return(
            <DeliveyCategory {...item} />
            )
        })    
       }
   </Slider>
 
        </div>
        </>
    )
}
export default DeliveryCarousel;