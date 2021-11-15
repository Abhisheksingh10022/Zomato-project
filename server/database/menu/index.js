import  Mongoose  from "mongoose";
const menuSchema= new Mongoose.Schema({
    menu:[
        {
        name:{type:String,required:true},
        items:[{
            type:Mongoose.Types.ObjectId,
            ref:"Food",
        }]
    }
],
    recomended:[{
        type:Mongoose.Types.ObjectId,
        ref:"Food",
        unique:true,
    }]
});
export const menuModel=Mongoose.model("Menu",menuSchema);