import mongoose  from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema=new mongoose.Schema({
    fullname:{type:String,required:true},
    email:{type:String,reuired:true},
    password:{type:String},
    address:[{detail:{type:String},for:{type:String}}],
    phoneNumber:[{type:Number}]

},
{
    timestamps:true
});
userSchema.statics.findByEmailAndPhone=async ({email,phoneNumber})=>{
    const checkuserByEmail=await userModel.findOne({email});
const checkuserByPhoneNumber=await userModel.findOne({phoneNumber});
if(checkuserByEmail||checkuserByPhoneNumber)
{
    throw new Error("user already present");
}
return false;
};
userSchema.statics.findByEmailAndPassword= async ( {email,password})=>{

    const checkUser= await userModel.findOne({email});

    if(!checkUser)
    {
        throw new Error("user does not exist");
    }
    const doesPasswordMatch=  await bcrypt.compare(password,checkUser.password);

    if(!doesPasswordMatch)
    {
        throw new Error("invalid password");
    }
    return checkUser;
};
userSchema.pre("save",function(next)
{
const user=this;
if(!user.isModified("password"))
{
    return next();
}
bcrypt.genSalt(8,(error,salt)=>{
    if(error)
    {
        return next(error);
    }
    bcrypt.hash(user.password,salt,(error,hash)=>
    {
        if(error)
        {
            return next(error);
        }
        user.password=hash;
        return next();
    });

});
});

userSchema.methods.generateJwttoken=function()
{
    return jwt.sign({user: this._id.toString()}, "zomatoApp");
   
};
export   const userModel=mongoose.model("Users",userSchema);
