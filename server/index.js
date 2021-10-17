require("dotenv").config();
//libraries
import  express, { urlencoded }  from "express";
import cors from "cors";
import helmet from "helmet";
//microservices routers
import Auth from "./Api/auth/index";
//database coonection
import connectDb from "./database/connections";
const zomato=express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({extended :false}));
zomato.use(cors());
zomato.use(helmet());
//application routes
zomato.use("/auth",Auth);

zomato.get("/",(req,res)=>{
    res.json({message:"system setup"});
});
zomato.listen(4000,()=>{
    connectDb().then(()=>{console.log("server is running")})
   /* .catch(()=>{
        console.log("server is running,but database not connected");
    })*/
    
});