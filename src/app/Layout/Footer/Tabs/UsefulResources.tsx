import FooterLink from "@/components/FooterLink/FooterLink";


const usefulResources = [
  { title: "E Library", url: "/facilities/e-library" },
  { title: "Syllybus", url: "/student-corner/syllybus" },
  { title: "Placements", url: "/student-corner/placements" },
  { title: "NCC", url: "/student-corner/ncc" },
  { title: "Gallery", url: "/gallery" },
  {
    title: "Chancellor Portal",
    url: "http://jharkhanduniversities.nic.in/login",
    isExternal: true,
  },
];
export default function UseFulResources() {
  return (
    <div className="flex flex-col">
      <h4 className="text-inherit mt-0 h-16 flex items-center justify-center font-bold mb-6 text-xl border-b-2 pb-2">
        Useful Resources
      </h4>
      {usefulResources.map((value, index) => {
        return (
          <FooterLink title={value.title} key={"usefulresource"+index} url={value.url} isExternal={value.isExternal}  />
        );
      })}
    </div>
  );
}
