import  express  from "express";
import { orderModel } from "../../database/order";
import passport from "passport";
import { validateOrder } from "../../validation/order";

const Router=express.Router();



/*Route /
method get
des :get all orders using id of user
params id
*/
Router.get("/:_id",passport.authenticate("jwt",{session:false}),async (req,res)=>{
    try{
        await validateOrder(req.params);
const { _id }=req.params;
const getOrders=await orderModel.findOne({user:_id});
if(!getOrders)
{
    return res.status(404).json({error:"user does not exist!"});
}
return res.status(200).json({getOrders});
    }
    catch(error)
    {
        return res.status(500).json({error:error.message});
    }
})
/*Route new
des  add new order to user 
method post
*/
Router.post("/new/:_id",async(req,res)=>{
    try{
        await validateOrder(req.params); 
const { _id}=req.params;
const {orderDetails}=req.body;
const addNewOrder=await orderModel.findOneAndUpdate({user:_id},{$push:{orderDetails}});
return res.status(200).json({addNewOrder});
    }
    catch(error)
    {
return res.status(500).json({error:error.message});
    }
})



export default Router;

