import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
type NavItem = {
  title: string,
  url: string,
  newTab?:boolean,
  equal?: boolean
}
const navItems: NavItem[] = [
  { title: "Home", url: "/", equal: true },
  { title: "Try Web Version", url: "/web-version" },
  { title: "Mobile App Prototype", newTab:true, url: "https://www.youtube.com/watch?v=km1kNJwGvps" },


]
export default function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);



  return (
    <Navbar color="white" fullWidth className="mx-auto z-60 sticky top-0 py-4 px-4 lg:px-8">
      <div className="container  top-0 mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 text-xl flex cursor-pointer py-1.5 font-medium items-center gap-4"
        >
          {/* <Image height={60} width={120} className="my-0 rounded-md object-contain" alt="BLS Logo" src="/logo/logo.png" /> */}
          Hybrid Learning System
        </Typography>
        <div className="hidden lg:block"><NavList setNavOpen={setOpenNav} /></div>
        <div className="hidden lg:inline-block">

          <NavRightItems />
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-8 w-8 p-2 rounded active:bg-pink-800 transition-all bg-pink-500 hover:bg-pink-600 lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav} className="">
        <div className="container mx-auto py-4">
          <NavList setNavOpen={setOpenNav} />
          <NavRightItems />
        </div>
      </Collapse>
    </Navbar>
  );
}

function NavList({ setNavOpen }: { setNavOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const pathname = usePathname();
  return <ul className="flex flex-col lg:flex-row gap-4 items-center ">

    {navItems.map((value: NavItem, index: number) => {
      const isEqual = !value.equal ? pathname.startsWith(value.url) ? true : false : pathname == value.url ? true : false;
      return <Link target={value.newTab?"_blank":"_self"} onClick={() => {
        setNavOpen(false);
      }} href={value.url} key={"NavUrls" + index}> <Button size="sm" variant={isEqual ? "filled" : "outlined"} color={isEqual ? "orange" : "pink"}>{value.title}</Button></Link>
    })}
  </ul>
}


function NavRightItems() {
  return <div className="my-6 lg:my-0 ">
    <Link href="/about-us">
      <Button variant="filled" color="red" size="sm" fullWidth className="mb-2">
        <span>About Us</span>
      </Button>
    </Link>

  </div>
}