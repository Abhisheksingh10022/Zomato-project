import React from "react";
import Slider from "react-slick";
const logos=[{
    image:"https://1000logos.net/wp-content/uploads/2017/05/Pizza-Hut-Logo-1999.jpg"
},

{
    image:"data:image/png;base64,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"
},
{
    image:"https://logos-world.net/wp-content/uploads/2020/04/Burger-King-Logo-1999-present.jpg"
},
{
    image:"https://1000logos.net/wp-content/uploads/2017/03/KFC-Logo.png"
},{
    image:"https://www.hospibuz.com/wp-content/uploads/2020/02/HospiBuz_Haldiram-compressor.jpg"
}];

const Brand =()=>{
    const settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
     
      };
      return(
        <>
        <div className="flex flex-col gap-3 lg:mt-10">
        <div className="text-xl font-semibold ">Order from your favourite brand</div>
          <Slider {...settings}>
              {logos.map((logo)=>{
                return (
                    <>
                    <div className="sm:w-24 h-24 shadow mb-10 lg:w-40 lg:h-40 ">
                        <img src={logo.image} alt="brand" className="w-full h-full"/>
                    </div>
                    </>
                );  
              })}
              </Slider>
              </div>
              </>
      )
};
export default Brand;

