import React from "react";
import ImageGrid from "../components/Restaurant/imageGrid";
import RestaurantNavbar from "../components/Navbar/RestaurantNavbar";
import RestaurantInfo from "../components/Restaurant/restaurantInfo";
import InfoButtons from "../components/Restaurant/InfoButtons";
import {AiOutlineStar } from "react-icons/ai";
import {MdDirections} from "react-icons/md";
import {BsFillBookmarkPlusFill} from "react-icons/bs";
import{IoIosShareAlt} from "react-icons/io"
import TabContainer from "../components/Restaurant/TabContainer";
const RestaurantLayout =(props)=>{
    return(
        <>
   <RestaurantNavbar />
     <div className="container mx-auto px-4 lg:px-20">
   <ImageGrid image={["https://b.zmtcdn.com/data/pictures/9/18702629/099c30b3213230edf1f90a0087fb86e7.jpg?fit=around|771.75:416.25",
                    "https://b.zmtcdn.com/data/pictures/9/18702629/099c30b3213230edf1f90a0087fb86e7.jpg?fit=around|771.75:416.25",
                    "https://b.zmtcdn.com/data/pictures/9/18702629/099c30b3213230edf1f90a0087fb86e7.jpg?fit=around|771.75:416.25",
                    "https://b.zmtcdn.com/data/pictures/9/18702629/099c30b3213230edf1f90a0087fb86e7.jpg?fit=around|771.75:416.25",
                    "https://b.zmtcdn.com/data/pictures/9/18702629/099c30b3213230edf1f90a0087fb86e7.jpg?fit=around|771.75:416.25"]}/>
                    <RestaurantInfo name="Pahalwan" restaurantRating="2" 
                    deliveryRating="186"
                    quisine="North Indian,chinese,Street food"
                    address="Gandhi nagar,Jammu" />

                   <div className="my-4 flex flex-wrap gap-3">
                     <InfoButtons isActive>
                       <AiOutlineStar /> Add Review
                     </InfoButtons>
                     <InfoButtons >
                       < MdDirections/> Direction
                     </InfoButtons>
                     <InfoButtons >
                       < BsFillBookmarkPlusFill/>Add bookmark
                     </InfoButtons>
                     <InfoButtons >
                      <IoIosShareAlt />share
                     </InfoButtons>


                   </div>
                   <div className="my-4">
                    <TabContainer />
                    </div>
                    <div>
                      {props.children}
                    </div>
                    </div>
        </>
    )
}
export default RestaurantLayout;