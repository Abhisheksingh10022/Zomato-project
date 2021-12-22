import React, { useState } from "react";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import MenuList from "./MenuList";
const FloatMenubtn=()=>{
    const [isClicked,setIsClicked]=useState(false);

const toggleMenu=()=>setIsClicked((prev)=> !prev)


    return (
    <>
    <div className="fixed z-30 w-8/12 flex flex-col items-center   bottom-2 right-2 md:hidden">
       { isClicked &&(<div className="p-3 bg-white h-48 overflow-y-scroll">
       <MenuList />
        </div>)
       }
    <button 
      onClick={toggleMenu}
     className="fixed bottom-2 right-2 text-white flex items-center gap-2 z-30 px-3 py-2 bg-yellow-900 rounded-full md:hidden">
      {isClicked?<AiOutlineClose />:<AiOutlineMenu />} Menu
    </button> 
    </div>
 
    </>
    )
}
export default FloatMenubtn;