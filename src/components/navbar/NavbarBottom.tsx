"use client"
import { myContext } from "@/context";
import Link from "next/link";

import React, { useContext} from "react";
const NavbarBottom = () => {
  const {userObject, setUserObject } = useContext<any>(myContext);
  const {setIsActive} = useContext<any>(myContext);
  const {setIsObject} = useContext<any>(myContext);

  const navbarBottoms = [
    { 
      index:0, label: "Swap", link:'/swap' 
    },
    { 
      index:1, label: "Liquidity", link:'/liquidity' 
    },
    { 
      index:2, label: "Perpetual" , link:'/perpetual' 
    },
    {
      index: 3, label: "Options" , link:'/options' 
      },
    { 
      index: 4, label: "Bridge" , link:'/bridge' 
    },
  ];

  return (
    <div className="navbar-bottom flex flex-col items-center justify-between border-t-[1px] p-1">
      <ul className="flex">
        {navbarBottoms.map((item) => (
          <div key={item.index}>
            <Link href={item.link}>
            <li className={`cursor-pointer flex-1 mr-10 text-center block ${userObject === item.index ? 'border-b-4 border-[rgb(122,110,170)] text-[bg-button] font-bold' : 'font-medium'}  hover:bg-[#1fc7d43d] hover:text-black p-1 text-black`} onClick={()=>{setUserObject(item.index), setIsActive(item.index),setIsObject(item)}}>
              {item.label}   
            </li>
            </Link>
              
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NavbarBottom;
