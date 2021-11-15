import  Mongoose  from "mongoose";

const reviewSchema=new Mongoose.Schema({
    food:{
        type:Mongoose.Types.ObjectId,
        ref:"Food",
    },
    restaurant:{
        type:Mongoose.Types.ObjectId,
        ref:"Restaurants",
    },
    user:{type:Mongoose.Types.ObjectId,ref:"Users"},
    rating:{type:Number,required:true},
    reviewtext:{type:String},
    isFoodReview:{type:Boolean,required:true},
    isRestaurantRevie:{type:Boolean,required:true},
    photos:[{type:Mongoose.Types.ObjectId,ref:"Images"}]

});
export const reviewModel=Mongoose.model("Reviews",reviewSchema);