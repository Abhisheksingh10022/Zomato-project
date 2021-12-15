import React from "react";
import classnames from "classnames";
import { useLocation,useParams,Link} from "react-router-dom";

const Tab=(props)=>{
    return(
    <>
    <Link to={`/restaurant/${props.route}`} >
    <div className={classnames("text-gray-500 font-light border-b-2 border-gray-400",{
        "text-Zomato-400 font-semibold":props.isActive
    })}>
<h3 className="text-lg md:text-xl">{props.title}</h3>
        </div>
        </Link>
        </>
        )
}
const TabContainer =()=>
{const location=useLocation();
    const currentpath=location.pathname;
    const tabs=[{
        title:"Overview",
        route:"overview",
        isActive:currentpath.includes("overview")
    },
    {
        title:"Order Online",
        route:"order-online",
        isActive:currentpath.includes("order-online")
    }
,
{
title:"Review",
route:"review",
isActive:currentpath.includes("review")},
{
    title:"Menu",
    route:"menu",
    isActive:currentpath.includes("menu")
},{
    title:"Photos",
    route:"photos",
    isActive:currentpath.includes("photos")
}]
    return(
        <>
<div 
className="flex items-center pb-4 gap-8 md:gap-20  border-b-2">
{tabs.map((tab)=>{
    return(
    <Tab {...tab } key={`123${tab.route}`} />
    )
})}
</div>
        </>
    )
}
export default TabContainer;