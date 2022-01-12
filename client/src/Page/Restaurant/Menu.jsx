import  React,{useState} from "react";
import MenuCollection from "../../components/Restaurant/Menucollection";

const Menu=()=>{
    const [Menus,SetMenus]=useState([]);

    return(
        <>
        <div className="flex flex-wrap gap-3">
            {
                Menus.map((menu)=>{
                  return(
                      <MenuCollection
                      {...menu}
                      />
                  )  
                })
            }
        </div>
        </>

    )
}