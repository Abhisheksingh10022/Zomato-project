import React,{useState} from "react";
import ReviewModal from "../../components/Restaurant/Reviews/ReviewModal";

const AddReviewCard=()=>{
    const [isOpen, setIsOpen] = useState(false);
    const openModal = ()=>{setIsOpen(true)}
    return (
        <>
        <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} />
        <h3 className="text-xl font-medium">Rate your experience for</h3>
        <div className="flex gap-3">
        <div className="flex  items-center gap-2">
            <label htmlFor="dining">Dining</label>
        <input type="radio" name="review" id="dining"/> 
        </div>
        <div className="flex items-center gap-2">
            <label htmlFor="delivery">Delivery</label>
        <input type="radio" name="review" id="delivery" /> 
        </div>
        </div>
       
        <button onClick={openModal} className="text-Zomato-400">write a review</button>
        </>
    )
}
export default AddReviewCard;