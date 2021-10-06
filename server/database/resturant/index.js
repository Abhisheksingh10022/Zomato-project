import {  Mongoose } from "mongoose";

const RestaurantSchema =new Mongoose.schema({
    name:{type:String,required:true},
    city:{type:String,required:true},
    address:{type:String,required:true},
    maplocation:{type:String,required:true},
    cuisine:[String],
    restauranttimings:String,
    contactNumber:Number,
    website:Number,
    popularDishes:[String],
    averageCost:Number,
    amenties:[String],
    menuImages:{
        type:Mongoose.Types.objectId,
        ref:"images",
    },
    menu:{
        type:Mongoose.Types.objectId,
        ref:"Menus,"
    },
    reviews:[{type:Mongoose.Types.objectId,ref:"Reviews"}],
    photos:{type:Mongoose.Types.objectId,ref:"images"},
});
export const restaurantModel=Mongoose.model("Restaurants",RestaurantSchema);