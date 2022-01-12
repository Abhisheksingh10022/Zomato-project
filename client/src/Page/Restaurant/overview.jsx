import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineArrowRight} from "react-icons/ai";
import MenuCollection from "../../components/Restaurant/Menucollection";
import MenuSimilarCard from "../../components/Restaurant/Menusimilarcard";
import Slider from "react-slick";
import { PrevArrow } from "../../components/carousalArrow";
import { NextArrow } from "../../components/carousalArrow";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "../../components/Restaurant/Reviews/ReviewCard";

import {MapContainer,TileLayer,Marker,Popup} from "react-leaflet";
import Mapview from "../../components/Restaurant/Mapview";
const Overview =()=>{
  
    const settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        NextArrow:<NextArrow />,
         PrevArrow:<PrevArrow />
      };
      const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return(
        <>
        <div className="flex flex-col md:flex-row ">
            <div className="w-full md:w-3/5">
                <h2 className="font-semibold text-lg md:text-xl">About this place</h2>
                <div className="flex justify-between items-center">
                    <h4 className="text-lg font-medium">Menu</h4>
                    <Link to={`/restaurant/menu`}>
                    <span className="flex items-center gap-1 text-Zomato-400">see all menu <AiOutlineArrowRight /></span>
                    </Link>
                
                </div>
                <div className="flex flex-wrap gap-3 my-4">
                        <MenuCollection menuTitle="Menu" pages="3" image={["https://b.zmtcdn.com/data/menus/629/18702629/8de5ca03c1ba002e21d34d54a5a6835f.jpg"]} />
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
                         <Slider {...settings} >
                         <MenuSimilarCard 
                         image="https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360"
                          title="aalu gobi" />
                        <MenuSimilarCard 
                         image="https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360"
                          title="aalu gobi" />
                        <MenuSimilarCard 
                         image="https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360"
                          title="aalu gobi" />

                         </Slider>
                         </div>   
                         <div className="my-4">
                         <h4 className="text-lg font-medium">Rate your delivery experiences</h4>
                         <ReactStars
                         count={5}
                            onChange={ratingChanged}
                               size={24}
                          activeColor="#ffd700"
                          />
                         </div>
                    <div className="md:hidden w-full  my-4 flex flex-col gap-4"><Mapview title="Pahalwan" phno="91987473" mapLocation={[51.505,-0.09]} address="gandhi nagar,jammu"/></div>
                         <div className="my-4">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                         </div>

                </div>
                <aside
                style={{height:"fit-content"}}
                 className="hidden md:block md:w-2/5 fixed sticky top-2  p-3 shadow-md">
               <Mapview title="Pahalwan" phno="91987473" mapLocation={[51.505,-0.09]} address="gandhi nagar,jammu"/>
            </aside> 
        </div>

        </>
    )
}
export default Overview;