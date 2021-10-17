//library
import express from  "express";
//models
import { userModel } from "../../database/user";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
const Router = express.Router();
/*
Route /signup
Des signup with email or phone number
params none
Acess public
method post
*/
Router.post("/signup", async  (req,res)=>{ 
    try{
 const {email,password,fullname,phoneNumber}=req.body.credentials;

 // check email exist
const checkuserByEmail=await userModel.findOne({email});
const checkuserByPhoneNumber=await userModel.findOne({phoneNumber});
if(checkuserByEmail||checkuserByPhoneNumber)
{
    return res.json({error:"user already exist"});
}

//hash the password
const bcryptSalt= await bcrypt.genSalt(8);

const hashpassword=await bcrypt.hash(password,bcryptSalt);
await userModel.create({...req.body.credentials,password:hashpassword});
const token =jwt.sign({user:{fullname,email,password,phoneNumber}},"zomatoapp");
 //geneate jwt token

 //return
 return res.json.Status(200).json({token,status:500});
    } 
    catch(error)
    {
        return res.status(500).json({error:error.message});
    }
});
module.exports=Router;