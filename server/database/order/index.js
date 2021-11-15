import  Mongoose  from "mongoose";

const orderSchema=new Mongoose.Schema({
    user:{
        type:Mongoose.Types.ObjectId,
        ref:"Users",
    },
    orderDetails:[{
food:{type:Mongoose.Types.ObjectId,ref:"Food"},
quantity:{type:Number,required:true},
paymode:{type:String,required:true},
status:{type:String,default:"Placed"},
paymentDetails:{
    itemTotal:{type:Number,required:true},
    promo:{type:Number,requird:true},
    tax:{type:Number,required:true},
}
    }],
  
});
export const orderModel=Mongoose.model("Order",orderSchema);