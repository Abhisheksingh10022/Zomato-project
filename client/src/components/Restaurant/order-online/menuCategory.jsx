import React from "react";
import classnames from  "classnames";
const MenuCategory=(props)=>{
    return (
        <>
        <div className={classnames({"text-Zomato-400 bg-Zomato-50 border-r-2 border-Zomato-400":props.isActive,})}
        onClick={props.onClickhandler}
        id={props.name}
        >
    <h3    onClick={props.onClickhandler}
        id={props.name}>{props.name}{props.items.length}</h3>
        </div>
        </>
    )
}
export default MenuCategory;