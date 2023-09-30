import { IconType } from "react-icons/lib"
import { IoMdNotifications } from 'react-icons/io';
import { IoFastFoodSharp, IoLibrary, IoNotificationsCircleOutline, } from 'react-icons/io5'
import { AiFillHome } from 'react-icons/ai';
import { TfiLayoutSliderAlt } from 'react-icons/tfi';
import { MdLocalLibrary, MdOutlineAnalytics, MdUpcoming } from "react-icons/md";
import { HiOutlineUsers, HiPhotograph } from 'react-icons/hi'
import { SiPowerpages } from 'react-icons/si';
import { FcCamera, FcGallery, FcOpenedFolder, FcStackOfPhotos } from "react-icons/fc";
import { LuSchool2 } from "react-icons/lu";
import { TbToolsKitchen2 } from "react-icons/tb";
import { BsCalendarEvent } from "react-icons/bs";
import { BiSolidUserCheck } from "react-icons/bi";
export type AdminSidebarType = {
    title: string,
    subtitle?: string,
    LeftIcon?: IconType,
} & ({
    type: "submenu",
    initialHref: string,
    subMenu: AdminSidebarType[],
} | {
    type: "menu",
    href: string,
    iconColor?: string,
    bgColor?:string,

})

export const AdminSidebarItems: AdminSidebarType[] = [
    {
        title: "Products", type: "submenu", initialHref: "/admin/products", LeftIcon: HiOutlineUsers, subMenu: [
            { title: "Add Products", type: "menu", href: "/admin/products", LeftIcon: BiSolidUserCheck },
        ]
    },



]