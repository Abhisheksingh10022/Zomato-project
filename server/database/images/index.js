import { Mongoose } from "mongoose";

const imageSchema=new Mongoose.schema({
    images:[{
        location:{type:String,required:true},
    }]
});
export  const imageModel=Mongoose.model("images",imageSchema);