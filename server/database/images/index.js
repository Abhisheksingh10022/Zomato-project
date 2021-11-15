import  Mongoose  from "mongoose";

const imageSchema=new Mongoose.Schema({
    images:[
        {
        location:{type:String,required:true},
    }
]
});
export  const imageModel=Mongoose.model("Images",imageSchema);