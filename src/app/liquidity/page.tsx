"use client"

import LayoutLiquidity from "@/components/liquidity/LayoutLiquidity";

export default function Liquidity() {
  return (
    <>
     {/* <NavbarBottom/> */}
    <main className="main flex min-h-screen flex-col items-center justify-between px-24 py-8">
    <div className="p-1  flex justify-between">
        <LayoutLiquidity/>
    </div>
    </main>
    </>
  
  );
}
