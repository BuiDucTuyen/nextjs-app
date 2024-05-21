"use client"

import NavbarBottom from "@/components/navbar/NavbarBottom";
import LayoutSwap from "@/components/swap/LayoutSwap";
import { myContext } from "@/context";
import { ActiveProvider } from "@/lib/context";
import { createContext, useContext, useState } from 'react';

// export interface PropsClick {
//   isClick: number,
//   setIsClick:(isClick: number)=> void
// }
const ActiveContext = createContext<unknown>(0)
export default function Swap() {
  const {userObject, setUserObject } = useContext<any>(myContext);
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
        <button className={`rounded-full item-center w-full ${userObject === itemButton.id ? "bg-bg-button text-white font-bold" : "font-medium" }  p-2`} onClick={()=>setUserObject(itemButton.id)}>{itemButton.title}</button>
        </div>
      )
    )}
    </div>
    <LayoutSwap/>
    </main>
    </>
  );
}

export const useActiveContext = () => {
  const context = useContext(ActiveContext);
 
  if (!context) {
    throw new Error("useActiveContext must be used inside the ActiveContext");
  }
  return context;
};