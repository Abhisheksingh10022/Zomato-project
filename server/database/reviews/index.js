import { Mongoose } from "mongoose";

const reviewSchema=new Mongoose.schema({
    food:{
        type:Mongoose.Types.ObjectId,
        ref:"food",
    },
    restaurant:{
        type:Mongoose.Types.ObjectId,
        ref:"restaurants",
    },
    user:{type:Mongoose.Types.ObjectId,ref:"users"},
    rating:{type:Number,required:true},
    reviewtext:{type:String},
    photos:[{type:Mongoose.Types.ObjectId,ref:"images"}]

});
export const reviewModel=Mongoose.model("reviews",reviewSchema);