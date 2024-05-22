import { myContext } from '@/context';
import Link from 'next/link';
import React, { useContext } from 'react'

const NavbarBuy = () => {
    const {userObject, setUserObject } = useContext<any>(myContext);
    const buttons = [
        { 
          index:0, label: "Farms", link:'/farms' 
        },
        { 
          index:1, label: "CAKE Staking", link:'/cake-staking' 
        },
        { 
          index:2, label: "Pools" 
        },
        {
          index: 3, label: "Position Manager" 
          },
        { 
          index: 4, label: "Liquid Staking" 
        },
        { 
          index: 5, label: "Simple Staking" 
        },
      ];

  return (
    <div>
      <div className="navbar-bottom flex flex-col items-center justify-between border-t-[1px] p-1">
      <ul className="flex">
        {buttons.map((item) => (
          <div key={item.index}>
            <Link href='/swap'>
               <li className={`cursor-pointer flex-1 mr-10 text-center block ${userObject === item.index ? 'border-b-4 border-[rgb(122,110,170)] text-[bg-button] font-bold' : 'font-medium'}  hover:bg-[#1fc7d43d] hover:text-black p-1 text-black`} onClick={()=>setUserObject(item.index)}>
              {item.label}   
            </li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default NavbarBuy