import React from "react";
import DeliveryCarousel from "./DeliveryCarousel";

const DeliverysmCard =({image,title})=>{
    return <>
    <div className="bg-white shadow rounded-md w-24 md:w-56">
        <div className="w-full h-24">
            <img src={image}
            alt="food"
            className="w-full h-full object-cover"
            />
        </div>
        <div>
            <h3 className="text-base my-2 text-center text-sm font-light">{title}</h3>
        </div>
    </div>
    </>
}
const DeliverylgCard =({image,title})=>{
    return <>
    <div className="bg-white w-64 h-48">
        <div className="w-full h-full">
            <img src={image}
            alt="food"
            className="w-full h-full object-cover shadow:lg"
            />
        </div>
        <div>
            <h3 className="text-sm  font-light">{title}</h3>
        </div>
    </div>
    </>
}
const DeliveryCategory =(props)=>{
    return<>
    <div className="lg:hidden "><DeliverysmCard {...props} /></div>
    <div className="hidden lg:block"><DeliverylgCard {...props} /></div>
    </>
}
export default DeliveryCategory;