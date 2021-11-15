//libraries
import express from "express";
import passport from "passport";

//Database
import {menuModel,imageModel} from "../../database/allmodel";

import { validateMenu,validateImage } from "../../validation/menu";

const Router=express.Router();

//route :"/list"
//des  get all the list menu based on id
//method get
//params _id

Router.get("/list/:_id",async(req,res)=>{
    try{
        await validateMenu(req.params);
    const {_id}=req.params;
    const menus=await menuModel.findone(_id);
    return res.json({menus});
    }
    catch(error)
    {
return res.status(500).json({error:error.message});
    }
});
//route /image
// des get all menu images based on _id
// params _id
//method get

Router.get("/images/:_id",async (req,res)=>{
    try{
       await validateImage(req.params);
const {_id}=req.params;
const images=await imageModel.findone(_id);
return res.json({images});
    }
    catch(error)
    {
return res.status(500).json({error:error.mesage});
    }
});
export default Router;