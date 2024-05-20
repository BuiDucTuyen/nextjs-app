"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [active,setActive] = useState(1)

   const arrButtons = [
    {id:1,title:'Market'},
    {id:2,title:'Swap'},
    {id:3,title:'Limit'},
   ] 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-8">
    <div className="w-[400px] bg-[rgb(238,234,244)] p-1 rounded-full flex justify-between">
      {arrButtons.map(itemButton => (
        <div key={itemButton.id} className="w-full ">
        <button className={`rounded-full item-center w-full ${active === itemButton.id ? "bg-bg-button text-white font-bold" : "font-medium bg-[rgb(238,234,244)]" }  p-2`} onClick={()=>setActive(itemButton.id)}>{itemButton.title}</button>
        </div>
      )
    )}
    </div>
    </main>
  );
}
