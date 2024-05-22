
"use client";
import { createContext, useState } from "react";
  export const myContext = createContext({});
  
  export default function Context(props: any) {
    const [userObject, setUserObject] = useState<any>();
    const [isActive,setIsActive] = useState(0)
    const [isObject,setIsObject] = useState({})

    return (
      <myContext.Provider value={{ userObject, setUserObject,isActive,setIsActive,isObject,setIsObject}}>
        {props.children}
      </myContext.Provider>
    );
  }