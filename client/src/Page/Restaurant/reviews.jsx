import React,{useState} from "react";
import ReviewCard from "../../components/Restaurant/Reviews/ReviewCard";
import AddReviewCard from "./AddReviewCard";

const Review=()=>{
    const [reviews,setReviews]=useState([" "," "," "," "]);
  
return(
    <>
    <div className="w-full flex flex-col md:flex-row relative">
    <div className="w-full md:w-8/12 flex flex-col gap-3">
        <div className="md:hidden">
        <AddReviewCard />
        </div>
 
    {
        reviews.map((review)=>{
            return(
            <ReviewCard {...review} />
            )
        })
    }
    </div>
    <aside
    style={{height:"fit-content"}}
    className="hidden md:block md:w-2/5 fixed sticky top-2  p-3 shadow-md">
      <AddReviewCard />
    </aside>
    </div>

    </>
)
}
export default Review;