//libraries
import express from "express";
import passport from "passport";

//Database
import {foodModel} from "../../database/allmodel";
import { validateRestaurantId,validateCategory } from "../../validation/food"
const Router=express.Router();

//route  /r
// des get all food based on a restaurnat
//params id
//method get

Router.get("/r/:_id",async (req,res)=>{
    try{  
        await validateRestaurantId(req.params);
        const {_id}=req.params;
   const food=await foodModel.find({restaurant:_id});
return res.json({food});
    }
    catch(error)
    {
return res.status(500).json({error:error.message});
    }
});

// route /
// des food based on a category
//params category
//method get

Router.get("/c:category",async (req,res)=>{
    try{
        await validateCategory(req.params);
    const {category}=req.params;
    const food =await foodModel.find({category:{$regex:category,$options:"i"}});
   return res.json({food});
    }
    catch(error)
    {
   return res.status(500).json({error:error.message});
    }
});
export default Router;