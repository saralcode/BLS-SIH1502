import Link from "next/link";

export default function AnchorButton({ children, className="", href="/" }) {
    return (
      <Link href="/" className={`select-none py-1 text-white active:scale-105 hover:bg-blue-600 transition-all shadow-md p-1.5 px-4 rounded-md ${className} `}>
        {children}
      </Link>
    );
  }


