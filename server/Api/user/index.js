import express from "express";
import { userModel } from "../../database/user";
import Router from "../orders";
/*
Route /:_id
des get user data
method get*/

Router.get("/:_id",async(req,res)=>{
    
    try{
        const {_id}=req.params;
        const getUser=await userModel.findById(_id);
      return res.json({user:getUser});
    }
    catch(error){
        return res.stauts(500).json({error:error.message});
    }
});
/*
route /update
des - update user details
method put
*/
Router.put("/update/:_id",async(req,res)=>{
    try{
    const {_id}=req.params;
    const {userData}=req.body;
    const updateUserdata=await userModel.findByIdAndUpdate(_id,{$set:userData},{new:true});

    return res.json({user:updateUserdata});
    }
    catch(error)
    {
        return res.status(500).json({error:error.message});
    }

})




export default Router;