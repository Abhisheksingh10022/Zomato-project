import mongoose from "mongoose";

const foodSchema =new mongoose.Schema({
name:{type:String,required:true},
discription:{type:String,required:true},
isVeg:{type:Boolean,requird:true},
iscontainsEgg:{type:Boolean,requird:true},
category:{type:String,required:true},
photos:{
type: mongoose.Types.ObjectId,
ref:"Images"},
price:{type:Number,default:150,required:true},
restaurant:{
    type:mongoose.Types.ObjectId,
    ref:"Restaurants",
    required:true
},
reviews:{
    type:mongoose.Types.ObjectId,
    ref:"Reviews",
    required:true
}
});
export const foodModel=mongoose.model("Food",foodSchema);