import { ReactNode, createContext, useEffect, useState } from "react";
import AdminSidebar from "./sidebar/Sidebar";
import AdminNavbar from "./Navbar/AdminNavbar";
import Router from "next/router";
import { useRouter } from "next/navigation"
import Link from "next/link";


import { MdArrowForwardIos } from "react-icons/md";
// import { canUserScroll } from "@/app/Layout/smoothscroll";



export default function AdminLayout({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState([]);

  const [routeChanging, setRouteChanging] = useState(0);
  // const Router = useRouter();
  useEffect(() => {
    // ========================
    let timeout: ReturnType<typeof setTimeout>;
    const OnStartChangingRoute = (url: string,) => {
      setRouteChanging(90);

      // wrapperRef.current.scrollTop = 0;
    };
    const OnCompleteChangingRoute = (url: string,) => {
      setRouteChanging(100);
      timeout = setTimeout(() => {
        setRouteChanging(0);
      }, 800);
    };

    // AddCopyButtonToCode();
    // Router.events.on("beforeHistoryChange", (h)=>{
    // console.log("pathname ", router)
    // router.reload()
    // if(router.pathname!="/[...slug]"){
    //   dispatch(CurrentPostDataAction({}))
    // }
    // });
    Router.events.on("routeChangeStart", OnStartChangingRoute);
    Router.events.on("routeChangeComplete", OnCompleteChangingRoute);
    // window.addEventListener("scroll", OnWrapperScroll, true);
    return () => {
      Router.events.off("routeChangeStart", OnStartChangingRoute);
      Router.events.off("routeChangeComplete", OnCompleteChangingRoute);
      // window.removeEventListener("scroll", OnWrapperScroll, true)
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>

      <AdminNavbar />
      <div className="flex overflow-auto text-white ">
        <AdminSidebar />

        {/* <AdminSidebar /> */}
        <main
          // onMouseEnter={() => canUserScroll(false)}
          className={`w-screen bg-slate-900 border-2  border-blue-500 adminWindow relative p-2`}
        >

          {children}
        </main>
      </div>

    </>
  );
}
