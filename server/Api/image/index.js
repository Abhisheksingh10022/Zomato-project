/*libraries

import express from "express";


import multer from "multer";
Database
import {imageModel} from "../../database/allmodel";

const Router=express.Router();

multer config
const storage=multer.memoryStorage();
const upload=multer({storage});

Route /
des upload given images to s3 bucket and save file link to mongodb
method post
Router.post("/",upload.single("file"),async(req,res)=>{
    try{

const file=req.file;
// s3 bucket options
const bucketoptions={
    
    Bucket:"mybucketshek",
    Key:file.originalname,
    Body:file.buffer,
    ContentType:file.mimetype,
    ACL:"public-read",
};

const uploadimage=await s3upload(bucketoptions);
return res.status(200).json({uploadimage});

    }
    catch(error)
    {
  return res.status(500).json({error:error.message});
    }
});
export default Router;
*/