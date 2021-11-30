import React from "react";
import DeliveyCategory from "./DeliveryCategory";
const DeliveryCarousel =()=>{
    return(
        <>
        <h1 className="text-xl font-semibold">Inspiration for your first order </h1>
        <div className="flex flex-wrap gap-3 justify-between my-4">
<DeliveyCategory />
<DeliveyCategory />
<DeliveyCategory />
<DeliveyCategory />
<DeliveyCategory />
<DeliveyCategory />

        </div>
        </>
    )
}
export default DeliveryCarousel;