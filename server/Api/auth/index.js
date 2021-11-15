//library
import express from  "express";
//models
import { userModel } from "../../database/user";
import { validateSignup,validateSignin } from "../../validation/auth";
import passport from "passport";

const Router = express.Router();
Router.post("/signup", async  (req,res)=>{
    try{
        await validateSignup(req.body.credentials);
 const {email,password,fullname,phoneNumber}=req.body.credentials;
await userModel.findByEmailAndPhone(email,phoneNumber);
const newUser=await userModel.create(req.body.credentials);

const token=newUser.generateJwttoken();
return res.status(200).json({token,status:"success"});
    } 
    catch(error)
    {
        return res.status(500).json({error:error.message});
    }
});
Router.post("/signin", async  (req,res)=>{ 
    try{
 await validateSignin(req.body.credentials);
const user=await userModel.findByEmailAndPassword(req.body.credentials);

const token=user.generateJwttoken();
return res.status(200).json({token,status:"success"});
    } 
    catch(error)
    {
        return res.status(500).json({error:error.message});
    }
});
//google authentication
Router.get("/google",passport.authenticate("google",{scope:["https://www.googleapis.com/auth/userinfo.profile",
"https://www.googleapis.com/auth/userinfo.email"]}));
//callback
Router.get("/google/callback",passport.authenticate("google",{failureRedirect:"/"}),
(req,res)=>{
    return res.json({token:req.session.passport.user.token});
});
module.exports=Router;