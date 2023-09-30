import Link from "next/link";
import { MdChevronRight } from "react-icons/md";
export default function FooterLink({title="", isExternal=false, url="/"}) {
  return (
    <div
      className="inline-flex items-center hover:translate-x-2 transition-all"
    >
      <MdChevronRight className="px-2 h-10 w-10" />
      {isExternal ? (
        <a
          target="_blank"
          rel="noreferrer"
          href={url}
          className="text-white"
        >
          {title}
        </a>
      ) : (
        <Link href={url} className="text-white">
          {title}
        </Link>
      )}
    </div>
  );
}
