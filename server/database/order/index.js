import { Mongoose } from "mongoose";

const orderSchema=new Mongoose.schema({
    user:{
        type:Mongoose.Types.ObjectId,
        ref:"users",
    },
    orderDetails:[{
food:{type:Mongoose.Types.ObjectId,ref:"food"},
quantity:{type:Number,required:true},
paymode:{type:String,required:true},
status:{type:String,default:"Placed"},
paymentDetails:{
    itemTotal:{type:Number,required:true},
    promo:{type:Number,requird:true},
    tax:{type:Number,required:true},
}
    }],
    orderRatings:{
        type:Number,
        required:true
    }
});
export const orderModel=Mongoose.model("order",orderSchema);