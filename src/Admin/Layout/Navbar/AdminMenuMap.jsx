import { Menu } from "@headlessui/react";

import { useContext } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

import PopOverButton from "../../../Layout/Navbar/Menu/PopOverButton/PopOverButton";
import AdminMenuItem from "./AdminMenuItem";
import { NavItemOpen } from "../AdminLayout";
import { AdminSidebarItems } from "./AdminNavItems";
import { usePathname } from "next/navigation";

export default function AdminMenuMap() {
  const { openValue, setValue, setMobileMenuOpen } = useContext(NavItemOpen);

  const onClose = () => {
    setValue(-1);
  };
  const onLinkClick = () => {
    onClose();
    // setMobileMenuOpen(false);
  };
  const pathname = usePathname();
  return (
    <>
      {Object.keys(AdminSidebarItems).map((value, index) => {
        return (
          <AdminMenuItem
            onOpen={() => {
              //   setOpen(index);
              setValue(index);
            }}
            open={index == openValue}
            onClose={onClose}
            title={value}
            hrefList={AdminSidebarItems[value].flatMap((value) => value.href)}
            key={`menubar${index}`}
          >
            {AdminSidebarItems[value] &&
              AdminSidebarItems[value].map((value, itemIndex) => {
                return (
                  <Link
                    href={value.href}
                    // passHref
                    key={`menu${index}${itemIndex}`}
                    // legacyBehavior
                  >
                    <div onClick={onLinkClick}>
                      <PopOverButton
                        isSidebar={true}
                        iconColor={value.iconColor}
                        bgColor={value.bgColor}
                        title={value.title}
                        isCurrentPath={pathname == value.href}
                        subtitle={value.subtitle}
                        Ricon={value.LeftIcon}
                      />
                    </div>
                  </Link>
                );
              })}
          </AdminMenuItem>
        );
      })}
      {/* <button
        onClick={() => {
          signOut({});
        }}
        className={`flex z-60 select-none active:scale-105 active:bg-rose-700 justify-between lg:inline-flex transition-colors w-full h-10 items-center lg:h-auto rounded-md px-4 py-4 text-sm font-medium text-white outline-blue-500  duration-300 bg-purple-500 my-2 `}
      >
        LogOut
      </button> */}
    </>
  );
}
