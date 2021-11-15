import joi from "joi";

export const validateOrder=(orderData)=>{
    const Schema=joi.object({
        _id:joi.string()
    });
    return Schema.validateAsync(orderData);
}