import Link from "next/link";
import { MdContactMail } from "react-icons/md";
import { BsInstagram, BsFacebook, BsLinkedin, BsLink } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { IoCallSharp } from "react-icons/io5";

export default function Topbar() {
  const isEqual = usePathname() == "/contact-us";
  return (
    <div className="h-10 z-40 top-0 relative bg-gradient-to-r flex items-center justify-around px-2 bg-white shadow-md w-full">
      <div className="flex items-center scale-90 sm:scale-100 transition-all justify-center sm:gap-4 rounded px-3 p-2">
        <Link href="tel:+916207599846" legacyBehavior>
          <div
            className={`inline-flex  cursor-pointer ${isEqual ? "text-green-600" : "text-rose-500"
              }  sm:flex-row  px-2 items-center hover:scale-105 transition-all`}
          >
            <IoCallSharp className="h-5 w-5 " />
            <a className="px-2 text-inherit sm:inline-block leading-none select-none">
              6207599846
            </a>
          </div>
        </Link>
        <div className="w-0.5 bg-rose-500 h-full py-2" />
        <Link href="tel:+918252940937" legacyBehavior>
          <div
            className={`inline-flex  cursor-pointer ${isEqual ? "text-green-600" : "text-rose-500"
              }  sm:flex-row  px-2 items-center hover:scale-105 transition-all`}
          >
            <IoCallSharp className="h-5 w-5 " />
            <a className="px-2  text-inherit sm:inline-block leading-none select-none">
              8252940937
            </a>
          </div>
        </Link>
      </div>
      <div className="flex gap-5 sm:gap-10 px-4 bg-white p-2 rounded">
        <a target="_blank" rel="noreferrer" href="https://instagram.com">
          <BsInstagram className="h-5 w-5 text-rose-500" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://facebook.com">
          <BsFacebook className="h-5 w-5 text-blue-500" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://linkedin.com">
          <BsLinkedin className="h-5 w-5 text-blue-600" />
        </a>
      </div>
    </div>
  );
}
