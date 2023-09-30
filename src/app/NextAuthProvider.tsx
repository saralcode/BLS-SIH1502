"use client";

import AdminLayout from "@/Admin/Layout/AdminLayout";
import { Session } from "next-auth";
import { SessionProvider, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./Layout/Layout";
import { useEffect } from "react";
import { SmoothScroll } from "./Layout/smoothscroll";
import Aos from 'aos';
import "aos/dist/aos.css";
type Props = {
  children?: React.ReactNode;
  session: Session | null;
};

export const NextAuthProvider = ({ children, session }: Props) => {
  useEffect(()=>{

      SmoothScroll(document, 300, 15);
      Aos.init({
        easing: "ease-in-out",
        once: true,
        duration: 1000,
        offset: 100
      })


  },[])
  const isAdmin = usePathname().startsWith('/admin')
  return <SessionProvider session={session}>
    <Auth isRequired={isAdmin}>
      <ToastContainer newestOnTop />
      {isAdmin ? (
        <AdminLayout>
          {children}
        </AdminLayout>
      ) : (
        <Layout>
          {children}
        </Layout>
      )}
    </Auth>
  </SessionProvider>;
};

function Auth({ children, isRequired = false }: { children: React.ReactNode, isRequired: boolean }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status, data } = useSession({ required: isRequired });
  if (status === "loading") {
    return <h4>Loading...</h4>;
  }

  return children;
}