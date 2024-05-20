import React from "react";
import Image from "next/image";

const imageSources = [
  "/moneyBangs.3211b981.svg",
  "/moneyBangs.3211b981.svg",
  "/moneyBangs.3211b981.svg",
  "/moneyBangs.3211b981.svg",
  "/moneyBangs.3211b981.svg",
  "/moneyBangs.3211b981.svg",
  "/moneyBangs.3211b981.svg",
];

const LayoutSwap: React.FC = () => {
  return (
    <div className="text-sm text-grey-darker font-sans min-h-screen bg-grey-light flex justify-around mt-8">
      <div className="s1 bg-black text-white rounded-[30px] shadow">
        <div className="p-[24px] flex flex-col gap-3 border-b-2 border-blue-500">
          <h2 className="text-[24px] mb-[15px] font-bold">Swap</h2>
          <p className="text-[16px] text-[#b8add2]">
            Trade tokens in an instant
          </p>
          <div className="flex gap-2 justify-end items-end p-2">
            {imageSources.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Money Bangs ${index + 1}`}
                width={21}
                height={21}
              />
            ))}
          </div>
        </div>
        <div className="p-[24px] flex flex-col gap-3 ">
          <h2 className="text-[24px] mb-[15px] font-bold">Swap</h2>
          <p className="text-[16px] text-[#b8add2]">
            Trade tokens in an instant
          </p>
        </div>
      </div>
    </div>
  );
};

export default LayoutSwap;
