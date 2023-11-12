import { Typography } from "@material-tailwind/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const footerData = [
  { text: "About Us", href: "/about-us" },
  // { text: "Contact Us", href: "/contact-us" },

]

export function MaterialFooters() {
  const { data } = useSession();
  return (
    <section className="w-full bg-indigo-600 p-8">
      <div className="flex p-2 rounded-md flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
<div></div>
        <ul className="flex flex-wrap justify-center items-center gap-y-2 gap-x-8 px-4">

          {data == null ? <li  >
            <Link href={"/api/auth/signin"}>
              <Typography
                color="blue-gray"
                className="font-normal cursor-pointer transition-all hover:text-blue-500 focus:text-blue-500 hover:scale-105 "
              >
                Login
              </Typography>
            </Link>
          </li>: <li><Link href={"/admin"}>
              <Typography
                color="blue-gray"
                className="font-normal cursor-pointer transition-all hover:text-blue-500 focus:text-blue-500 hover:scale-105 "
              >
                Page 1
              </Typography>
            </Link>
          </li> }
          {footerData.map((f, index) => {
            return <li key={"FooterLinks" + index} >
              <Link href={f.href}>
                <Typography
                  color="blue-gray"
                  className="font-normal cursor-pointer transition-all hover:text-blue-500 focus:text-blue-500 hover:scale-105 "
                >
                  {f.text}
                </Typography>
              </Link>
            </li>
          })}

        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="white" className="text-center  font-semibold">
        A Prototype of Blended Learning System
      </Typography>
      <Typography color="white" className="text-center font-semibold">
        By team : 8 Bit Guys
      </Typography>
    </section>
  );
}