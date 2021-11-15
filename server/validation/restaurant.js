import joi from "joi";

export const validateRestaurantCity=(RestaurantObj)=>{
    const Schema=joi.object({
     city:joi.string().required()
    });
    return Schema.validateAsync(RestaurantObj);
};

export const validateRestaurantSearchString=(RestaurantObj)=>{
    const Schema=joi.object({
     SearchString:joi.string().required()
    });
    return Schema.validateAsync(RestaurantObj);
};