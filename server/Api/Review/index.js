import  express from "express";


import passport from "passport";
import { reviewModel } from "../../database/reviews";

const Router =express.Router();
/*
route  /food/new
des  : Add food review
method post
param - none*/

Router.post("/food/new",async(req,res)=>{
    try{

const {ReviewData}=req.body;
 await reviewModel.create(ReviewData);
 return res.json({message:"review created successfully"
 })
    }
    catch(error)
    {
   return res.status(500).json({error:error.message});
    }

});
/*
route /delete
des -to delete an added review
method delete
*/
Router.delete("/delete/:_id",async(req,res)=>{
 try{
const{_id}=req.params;
await reviewModel.findByIdAndDelete(_id);
return res.json({message:"review deleted successfully"});
 }
 catch(error)
 {
return res.status(500).json({error:error.message});
 }


});


export default Router;