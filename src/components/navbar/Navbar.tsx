/** @format */
"use client";

import Image from "next/image";
import { ContextType, useContext, useState } from "react";

import logo from "@/assets/images/logo.svg";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import todoImage from "@/assets/images/icon-todo.svg";
import calendarImage from "@/assets/images/icon-calendar.svg";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import ThemeSwitcher from "../dark-mode/ThemeSwitcher";
// import { useActiveContext } from "@/lib/context";
import { myContext } from "@/context";

type NavItem = {
  id:number;
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    id:1,
    label: "Trade",
    link: "#",
    children: [
      {
        id:1,
        label: "swap",
        link: "/swap",
        iconImage: todoImage,
      },
      {
        id:2,
        label: "liquidity",
        link: "/liquidity",
        iconImage: calendarImage,
      }
    ],
  },
  {
    id:2,
    label: "Buy",
    link: "#",
    children: [
      {
        id:1,
        label: "History",
        link: "#",
      },
      {
        id:2,
        label: "Our Team",
        link: "#",
      },
      {
        id:3,
        label: "Blog",
        link: "#",
      },
    ],
  },
  {
    id:3,
    label: "Earn",
    link: "#",
  },
  {
    id:4,
    label: "Game",
    link: "#",
  },
  {
    id:5,
    label: "NFT",
    link: "#",
  },
];

export default function Navbar() {
  const {userObject, setUserObject } = useContext<any>(myContext);
  const [isActive,setIsActive] = useState<any>()
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);

  function openSideMenu() {
    setSideMenue(true);
  }
  
  function closeSideMenu() {
    setSideMenue(false);
  }

  console.log(userObject,">>>>>>>>>>>>userObjectvuserObject")
  return (
    <div className="navbar mx-auto flex w-full justify-between px-4 py-5 text-sm">
      {/* left side  */}
      <section ref={animationParent} className="flex items-center gap-10">
        {/* logo */}
        <Link href='/'><Image src={logo} alt=" logo" /></Link>
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group  px-2 py-3 transition-all "
              onClick={()=>setIsActive(i)} >
              <p className={`flex cursor-pointer items-center gap-2 text-neutral-400 `}>
                <span className={`${isActive === i ? 'text-bg-button font-bold' : ''}`}>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className={`rotate-180 transition-all ${userObject === i ? 'rotate-0' : ''} group-hover:rotate-0`}/>
                )}
              </p>

              {/* dropdown */}
              {d.children && (
                <div className="absolute   right-0   top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-white py-3 shadow-md  transition-all group-hover:flex ">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black" onClick={()=>setUserObject(i)}
                    >
                      {/* image */}
                      {ch.iconImage && (
                        <Image src={ch.iconImage} alt="item-icon" />
                      )}
                      {/* item */}
                      <span className={`whitespace-nowrap ${userObject === i ? 'text-bg-button font-bold' : '' } pl-3`}>
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* navitems */}
      </section>

      {/* right side data */}
      <section className=" hidden md:flex   items-center gap-8 ">
        <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
          Login
        </button>

        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
          Register
        </button>
      </section>

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link} 
              id={0}
              >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        <section className=" flex flex-col gap-8  mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>

          <button className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
            >
              {/* image */}
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
