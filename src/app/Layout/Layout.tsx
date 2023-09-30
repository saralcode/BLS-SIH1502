"use client"
import React, { useEffect } from 'react'
import BackToTop from "./BackToTop/BackToTop";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Topbar from "./Navbar/Topbar/Topbar";
import { SmoothScroll } from './smoothscroll';

export default function Layout({ children }: { children: React.ReactNode }) {

  return (<React.Fragment>
    <Navbar />
    {/* <Topbar /> */}
    <main className="h-full w-full min-h-[60vh] prose max-w-full">{children}</main>
    <Footer />
    <BackToTop />
  </React.Fragment>
  );
}
