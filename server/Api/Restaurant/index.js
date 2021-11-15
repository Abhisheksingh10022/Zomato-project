//libraries
import express from "express";
import passport from "passport";

//Database
import {restaurantModel} from "../../database/allmodel";
import { validateRestaurantCity,validateRestaurantSearchString } from "../../validation/restaurant";
import { validateRestaurantId } from "../../validation/food";
const Router=express.Router();

//route :"/"
//des  get all the restaurants based in the city
//method get

Router.get("/",async (req,res)=>{
   try{
      await validateRestaurantCity(req.query);
   const {city}=req.query;
   const allRestaurnats=await restaurantModel.find({city});
   return res.json({allRestaurnats});
   }
   catch(error)
   {
      res.status(500).json({error:error.message});
   }

});
//route : "/"
//des :get restaurant particular id
//method: get
Router.get("/:_id",async(req,res)=>{
  try{
     await validateRestaurantId(req.params);
     const { _id }=req.params;
     const restaurant=await restaurantModel.findById(_id);
     if(!restaurant)
     {
return  res.status(404).json({error:"Restaurnat not found"});
     }
     return res.json({restaurant});
    }
  catch(error)
  {
     return res.status(500).json({error:error.message});
  }

});
//route : /search
//des : get the restaurant based on serach string
//body  : searchString
//method : get

Router.get("/search",async (req,res)=>{
 try{
    await validateRestaurantSearchString(req.body);
const {searchString}=req.body;
const restaurants = await restaurantModel.find({name:{$regex:searchString,$options:"i"}});
if(!restaurants)
{
   return res.status(400).json({error: `Restaurant ${searchString} not foun`});
}
return res.json({restaurants});
 }
 catch(error)
 {
 return res.json({error:error.message});
 }
      
   });

export default Router;