import googleOAuth from "passport-google-oauth20";
import { userModel}  from "../database/user";
require("dotenv").config();
const GoogleStrategy=googleOAuth.Strategy;
export default(passport)=>{
    passport.use( new GoogleStrategy({   

         clientID:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
            callbackURL:"http://localhost:4000/auth/google/callback"
        },async (accessToken,refreshToken,profile,done)=>{
            //creating a new user object
            const newUser={
                fullname:profile.displayName,
                email:profile.emails[0].value,
                profilepic:profile.photos[0].value,
            };
            try{
                //check if the user is present
             
                const user=await userModel.findOne({email:newUser.email});
     
                if(user!=null)
                {
                    const token= user.generateJwttoken();
                    done(null,{user,token});
              
                }
                else{
                    //create new user
                    const user=await userModel.create(newUser);
                    //return user
                    
                    const token=user.generateJwttoken();
                    done(null,{user,token});
                }
            }
            catch(error)
            {
       done(error,null);
            }
        })
        );
passport.serializeUser((userData,done)=> done(null,{...userData}));
passport.deserializeUser((id,done)=> done(null,id));
};
