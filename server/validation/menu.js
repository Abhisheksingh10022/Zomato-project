import joi from "joi";

export const validateMenu = (Menuobj)=>{

    const Schema= joi.object({
        _id:joi.string()
    });
  return Schema.validateAsync(Menuobj);
}

