"use client"

import NavbarBottom from "@/components/navbar/NavbarBottom";
import { myContext } from "@/context";
import { useContext, useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    const {isActive} = useContext<any>(myContext);
    const {isObject} = useContext<any>(myContext);
    const [isContact,setIsContact] = useState(true)

    const arrays = ['Trade','Swap','Liquidity','Perpetual','Options','Bridge']

    useEffect(()=>{
         if(isObject) {
        arrays.forEach(item => {
            if(item == isObject.label) return setIsContact(false)
              } 
        )
    }
    },[isObject, isContact])

  
    return (
        <>
        {isActive == undefined || isContact ? '' : <NavbarBottom/>}
        <div className="animate-appear">
            {children}
        </div>
        </>
        
    )
}

  
























