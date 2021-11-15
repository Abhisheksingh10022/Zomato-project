import joi from "joi";

export const validateImage=(Imageobj)=>{
    const Schema=joi.object({
       _id:joi.string() 
    });
    return Schema.validateAsync(Imageobj);
}