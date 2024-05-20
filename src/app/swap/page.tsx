"use client"

import NavbarBottom from "@/components/navbar/NavbarBottom";
import LayoutSwap from "@/components/swap/LayoutSwap";
import { useState } from "react";

export default function Swap() {
  const [active,setActive] = useState(1)

   const arrButtons = [
    {id:1,title:'Market'},
    {id:2,title:'Swap'},
    {id:3,title:'Limit'},
   ] 

  return (
    <>
    <NavbarBottom/>
    <main className="main flex min-h-screen flex-col items-center justify-between px-24 py-8">
      {/* <NavbarBottom/> */}
    <div className="w-[400px] bg-[rgb(238,234,244)] p-1 rounded-full flex justify-between">
      {arrButtons.map(itemButton => (
        <div key={itemButton.id} className="w-full">
        <button className={`rounded-full item-center w-full ${active === itemButton.id ? "bg-bg-button text-white font-bold" : "font-medium" }  p-2`} onClick={()=>setActive(itemButton.id)}>{itemButton.title}</button>
        </div>
      )
    )}
    </div>
    <LayoutSwap/>
    {/* <div className="text-sm text-grey-darker font-sans min-h-screen bg-grey-light flex justify-around mt-8">
        <div className="s1 bg-white rounded-[30px] shadow flex items-center justify-center">
          .shadow
        </div>
    </div> */}
    </main>
    </>
    
  );
}
