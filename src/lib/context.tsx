import { PropsWithChildren, createContext, useContext, useState } from "react";
 
type ContextType = {
  active: number;
  setActive: (active: number) => void;
};
export const ActiveContext = createContext<ContextType | undefined>(undefined);
 
export const ActiveProvider = ({ children }: PropsWithChildren<{}>) => {
  const [active, setActive] = useState<ContextType["active"]>(0);
 
  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
};
 
// export const useActiveContext = () => {
//   const context = useContext(ActiveContext);
 
//   if (!context) {
//     throw new Error("useActiveContext must be used inside the ActiveContext");
//   }
 
//   return context;
// };