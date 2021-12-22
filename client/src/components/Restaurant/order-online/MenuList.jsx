import React,{useState} from "react";
import MenuCategory from "./menuCategory";
const MenuList=(props)=>{
    const[selected,setSelected]=useState("");
    const onClickhandler=(e)=>{
   
        if(e.target.id){
            setSelected(e.target.id)
        }
        return;
    };
    return (
        <>
        <div className="w-full flex flex-col gap-3">
            <MenuCategory name="Recomended" items={[" "," "]} 
            onClickhandler={onClickhandler}
            isActive={selected==="Recomended"}  />
            <MenuCategory name="Recomended" items={[" "," "]} 
            onClickhandler={onClickhandler}
            isActive={selected==="Recomended"}  />
            <MenuCategory name="Recomended" items={[" "," "]} 
            onClickhandler={onClickhandler}
            isActive={selected==="Recomended"}  />
            <MenuCategory name="Recomended" items={[" "," "]} 
            onClickhandler={onClickhandler}
            isActive={selected==="Recomended"}  />
            <MenuCategory name="Recomended" items={[" "," "]} 
            onClickhandler={onClickhandler}
            isActive={selected==="Recomended"}  />
        </div>
        </>
    )
}
export default MenuList;