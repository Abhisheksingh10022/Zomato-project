import joi from "joi";
//joi library for validating the data
export const validateSignup =(userData)=>{
    const Schema=joi.object({
        fullname:joi.string().required().min(5),
        email:joi.string().email(),
        password:joi.string(),
        address:joi.array().items(joi.object({detail:joi.string(),for:joi.string()})),
        phoneNumber:joi.number()
    });
    return Schema.validateAsync(userData);
};
export const validateSignin =(userData)=>{
    const Schema=joi.object({
        email:joi.string().email(),
        password:joi.string(),
    });
    return Schema.validateAsync(userData);
};
