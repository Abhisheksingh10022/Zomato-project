import React  from "react";
// Layout
import  RestaurantLayout from "../layout/RestaurantLayout"
const RestaurantLayoutHoc=(Component)=>
{
 const mycom =  props=>{
  return(
    <>
  
    <RestaurantLayout>
        <Component {...props} />
        </RestaurantLayout>)
      
  </>
      
  );

  }
  return mycom;
}
export default RestaurantLayoutHoc;