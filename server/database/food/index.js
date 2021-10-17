import mongoose from "mongoose";

const foodSchema =new mongoose.Schema({
name:{type:String,required:true},
discription:{type:String,required:true},
isVeg:{type:Boolean,requird:true},
iscontainsEgg:{type:Boolean,requird:true},
category:{type:String,required:true},
photos:{type: mongoose.Types.ObjectId,
ref:"images"},
price:{type:Number,default:150,required:tue},
restaurant:{
    type:mongoose.Types.ObjectId,
    ref:"restaurants"
}
});
export const foodModel=mongoose.model("food",foodSchema);