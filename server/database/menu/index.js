import { Mongoose } from "mongoose";

const menuSchema= new Mongoose.schema({
    menu:[{
        name:{type:String,required:true},
        items:[{
            type:Mongoose.Types.ObjectId,
            ref:"food",
        }]
    }],
    recomended:[{
        type:Mongoose.Types.ObjectId,
        ref:"food",
        unique:true,
    }]
});
export const menuModel=Mongoose.model("menu",menuSchema);