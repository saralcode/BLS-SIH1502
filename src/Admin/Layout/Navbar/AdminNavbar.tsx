import Image from "next/legacy/image";
import Link from "next/link";

import { CgMenu } from "react-icons/cg";
import { useContext } from "react";

import { signOut } from 'next-auth/react'
import { useSidebarState } from "@/state/adminSidebarState/adminSidebarState";
import Title from "@/components/Title/Title";
import { Button } from "@material-tailwind/react";
export default function AdminNavbar() {
  const { isToggled, setToggleState } = useSidebarState();
  return (
    <>

      <nav className="h-20 w-screen backdrop-blur-sm shadow  sticky z-60 top-0 bg-slate-900 sm:pr-8 flex leading-none items-center justify-between pr-2">
        <div className="flex px-6 gap-10 items-center justify-center">
          <div className={`pr-4 translate-x-0 transition-all relative md:hidden`}>
            <CgMenu
              onClick={() => {
                setToggleState(true);
              }}
              className={`h-10 w-10 text-white cursor-pointer hover:bg-green-600 transition-colors p-2  rounded ${isToggled
                ? "bg-green-600 "
                : "bg-rose-600 "
                }`}
            />
          </div>
          <Link href="/admin" passHref legacyBehavior>
            <div className="flex flex-col">
              <span className="inline-block font-extrabold text-xl  text-green-600 select-none">
                Nature Items
              </span>
            </div>
          </Link>

        </div>
        <div>
          <Button  variant="filled" color="blue" onClick={() => {
            signOut();
          }} >Signout</Button>
        </div>
        {/* <div className="flex items-center justify-end">
          <MobileMenu />
          <div className="hidden lg:flex">
            <MenuMap />
          </div> */}
        {/* </div> */}
      </nav>
    </>
  );
}
