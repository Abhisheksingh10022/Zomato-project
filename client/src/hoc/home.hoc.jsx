import React  from "react";
// Layout
import HomeLayout from "../layout/home.layout"
const HomeLayoutHOC=(Component)=>
{
 const mycom = props=>{
  return(
    <>
  
    <HomeLayout>
        <Component {...props} />
        </HomeLayout>)
      
  </>
      
  );

  }
  return mycom;
}

export default HomeLayoutHOC;
