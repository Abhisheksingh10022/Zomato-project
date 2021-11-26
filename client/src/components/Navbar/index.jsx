import React from "react";
import {FaUserAlt} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import {IoMdArrowDropdown,IoMdArrowDropup } from "react-icons/io";
import {RiSearch2Line} from "react-icons/ri";
const MobileNav=()=>{
    return<>
    <nav className="py-4 px-2 flex bg-white shadow-md -px-4 items-center justify-between">
        <div className="w-24">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
            alt="logo"
            className="w-full h-full"
            />
        </div>
        <div className="flex items-center gap-3">
            <button className="bg-Zomato-400 text-white px-3 py-2 rounded-full">use App</button>
            <span className="border p-2 border-gray-500 text-Zomato-400 rounded-full"><FaUserAlt /></span>
        </div>
    </nav>
    </>
};
const LgNav=()=>{
    return<>
    <div className="hidden  md:flex py-8 px-8 gap-4 w-full">
    <div className="w-36 px-4 py-4 ml-20">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
                alt="logo"
                className="w-full h-full"
                />
            </div>
            <div className="w-full bg-white shadow-md px-3 py-3  flex items-center gap-3">
                <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
              <span className="text-Zomato-400">
                  <HiLocationMarker />
              </span>
              <input type="text"  placeholder="Jammu" className=" focus:outline-none " />
              <IoMdArrowDropdown />
                </div>
                <div className="flex items-center gap-2 w-full">
                    <RiSearch2Line />
                    <input type="search" placeholder="search for restaurant,cuisine or a dish" className=" focus:outline-none w-full" ></input>
                </div>
            </div>
            <div className="flex items-center gap-4 lg:justify-end ml-20">
                <button className="text-gray-500 text-xl hover:text-gray-700">Login</button>
                <button className="text-gray-500 text-xl hover:text-gray-700">Signup</button>
            </div>
    </div>
    </>
    
    }

const Navbar=()=>{
    return (
    <>
<nav>
    <div className="lg:hidden"><MobileNav /></div>
    <div className="hidden lg:flex"> <LgNav /></div>
</nav>
    </>
    )
}
export default Navbar;