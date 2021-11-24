require("dotenv").config();
//libraries
import  express, { urlencoded }  from "express";
import cors from "cors";
import helmet from "helmet";
import passport  from "passport";

//import configs
import googleConfig from "./config/google.config";
import routeConfig from "./config/route.config";
//microservices routers
import Auth from "./Api/auth/index";
import Restaurant from "./Api/Restaurant/index";
import Food from "./Api/Food/index";
import Menu from "./Api/menu/index";
import Image from "./Api/image/index";
import Order from "./Api/orders/index";
import Review from "./Api/Review/index";
//database coonection
import connectDb from "./database/connections";
const zomato=express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({extended :false}));
zomato.use(cors());
zomato.use(helmet());
zomato.use(passport.initialize());
zomato.use(passport.session());
// passport configuration
googleConfig(passport);
routeConfig(passport);
//application routes
zomato.use("/auth",Auth);
zomato.use("/restaurant",Restaurant);
zomato.use("/food",Food);
zomato.use("/menu",Menu);

zomato.use("/order",Order);
zomato.use("/review",Review);

zomato.get("/",(req,res)=>{
    res.json({message:"system setup"});
});
zomato.listen(4000,()=>{
    connectDb().then(()=>{console.log("server is running")})
    .catch(()=>{
        console.log("server is running,but database not connected");
    })
     
});