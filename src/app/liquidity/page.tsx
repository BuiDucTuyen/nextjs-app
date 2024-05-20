"use client"

import LayoutLiquidity from "@/components/liquidity/LayoutLiquidity";
import NavbarBottom from "@/components/navbar/NavbarBottom";
import LayoutSwap from "@/components/swap/LayoutSwap";
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
    <main className="main flex min-h-screen flex-col items-center justify-between px-24 py-8">
    <div className="p-1  flex justify-between">
        <LayoutLiquidity/>
    </div>
    </main>
    </>
  
  );
}
