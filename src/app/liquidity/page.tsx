"use client"

import NavbarBottom from "@/components/navbar/NavbarBottom";
import Image from "next/image";
import { useState } from "react";

export default function Liquidity() {
  const [active,setActive] = useState(1)

   const arrButtons = [
    {id:1,title:'Market'},
    {id:2,title:'Swap'},
    {id:3,title:'Limit'},
   ] 

  return (
    <>
     <NavbarBottom/>
       <main className="flex min-h-screen flex-col items-center justify-between px-24 py-8">
    <div className="max-w-[400px] bg-white p-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-full flex justify-between">
      <div className="">
       kakakakakka
      </div>
    </div>
    </main>
    </>
  
  );
}
