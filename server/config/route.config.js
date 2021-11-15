import jwtpassport from "passport-jwt";

import { userModel } from "../database/user";
//jwt authentication for private routes
const JWTStrategy=jwtpassport.Strategy;
const ExtractJwt=jwtpassport.ExtractJwt;

const options={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"zomatoApp",
};

export default (passport)=>{
    passport.use(new JWTStrategy(options,async(jwt_payload,done)=>{
        try{
        const doesUserExist= userModel.findById(jwt_payload.user);
        if(!doesUserExist)return done(null,false);
        return done(null,doesUserExist);
        }
        catch(error)
        {
     throw new Error(error);
        }
    }))
}