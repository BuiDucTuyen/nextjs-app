// import { AxiosResponse } from "axios";
"use client";
import { createContext, useState } from "react";
  export const myContext = createContext({});
  
  export default function Context(props: any) {
    const [userObject, setUserObject] = useState<any>();
    return (
      <myContext.Provider value={{ userObject, setUserObject }}>
        {props.children}
      </myContext.Provider>
    );
  }