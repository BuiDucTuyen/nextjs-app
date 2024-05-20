"use client"

import React, { useState } from "react";
const NavbarBottom = () => {
  const [isActive,setIsActive] = useState(1)
  const buttons = [
    { id: 1, title: "Swap" },
    { id: 2, title: "Liquidity" },
    { id: 3, title: "Perpetual" },
    { id: 4, title: "Options" },
    { id: 5, title: "Bridge" },
  ];

  return (
    <div className="navbar-bottom flex flex-col items-center justify-between border-t-[1px] p-1">
      <ul className="flex">
        {buttons.map((item) => (
          <div key={item.id}>
            <li className={`cursor-pointer flex-1 mr-10 text-center block ${isActive === item.id ? 'border-b-4 border-[rgb(122,110,170)] text-[bg-button] font-bold' : ''}  hover:bg-[#1fc7d43d] hover:text-black p-1 text-black`} onClick={()=>setIsActive(item.id)}>
              {item.title}   
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NavbarBottom;
