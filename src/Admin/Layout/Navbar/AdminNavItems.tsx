import {
  FaUserFriends,
  FaGraduationCap,
  FaUniversity,
  FaBook,
  FaSuitcase,
  FaChalkboardTeacher,
  FaReadme,
  FaBuilding,
  FaTasks,
} from "react-icons/fa";
import {
  GiNetworkBars,
  GiTakeMyMoney,
  GiStairsGoal,
  GiAchievement,
} from "react-icons/gi";
import { BiTask } from "react-icons/bi";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import {
  MdHealthAndSafety,
  MdModelTraining,
  MdMedicalServices,
  MdLocalPolice,
  MdPeople,
  MdPhotoSizeSelectActual,
} from "react-icons/md";
import { FcWiFiLogo, FcBriefcase, FcGallery } from "react-icons/fc";

export const AdminSidebarItems = {
  Management: [
    {
      title: "Events",
      subtitle: "",
      LeftIcon: FaChalkboardTeacher,
      href: "/admin/events",
    },
    {
      title: "Notices",
      subtitle: "",
      LeftIcon: MdPeople,
      href: "/admin/notices",
    },
    {
      title: "College Gallery",
      subtitle: "",
      LeftIcon: MdPhotoSizeSelectActual,
      href: "/admin/college-gallery",
    },
    {
      title: "E Library",
      subtitle: "",
      LeftIcon: FcGallery,
      href: "/admin/e-library",
    },
    {
      title: "Canteen",
      subtitle: "",
      LeftIcon: FcGallery,
      href: "/admin/canteen",
    },
  ],
  Users: [
    {
      title: "Registration",
      subtitle: "",
      LeftIcon: FaChalkboardTeacher,
      href: "/admin/users/registration",
    },
    {
      title: "Permissions",
      subtitle: "",
      LeftIcon: MdPeople,
      href: "/admin/users/permissions",
    },
  ],
  Pages: [
    {
      title: "Home Page",
      subtitle: "",
      LeftIcon: FaChalkboardTeacher,
      href: "/admin/pages/homepage",
    },
  ],
};
