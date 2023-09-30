import FooterLink from "@/components/FooterLink/FooterLink";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

const useFulLinks = [
  { title: "Academic Calendar", url: "/student-corner/academic-calendar" },
  { title: "Downloads", url: "http://www.dspmuranchi.ac.in/Download.aspx", isExternal: true },
  { title: "Kulgeet", url: "http://www.dspmuranchi.ac.in/pdf/KULGEET.pdf", isExternal: true },
  { title: "Holiday List 2022", url: "http://www.dspmuranchi.ac.in/pdf/Holiday_List_2022_DSPMU.pdf", isExternal: true },
  { title: "Privacy Policy", url: "/privacy-policy" },
  { title: "Terms & Conditions", url: "/terms-and-conditions" },
];
export default function UseFulLinks() {
  return (
    <div className="flex flex-col">
      <h4 className="text-inherit mt-0 h-16 flex items-center justify-center  font-bold mb-6 text-center text-xl border-b-2 pb-2">
        Useful Links
      </h4>
      {useFulLinks.map((value, index) => {
        return (
          <FooterLink title={value.title} key={"usefulresource" + index} url={value.url} isExternal={value.isExternal} />
        );
      })}
    </div>
  );
}
