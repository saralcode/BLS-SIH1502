import Title from "@/components/Title/Title";
import { FaUserGraduate } from "react-icons/fa";
import Hero from "./Hero";
import Motivation from "./Motivation";
import Blog from "./Blog";
import FeaturesPage from "../features/page";
import HomeFeatures from "./Features";
import React, { ReactNode } from "react";

function MyCustomHeading({children}:{children:ReactNode}){
    return <h2 data-aos="fade-up" className="bg-gradient-to-r text-5xl font-extrabold p-2 font-serif text-transparent drop-shadow-md my-10 from-pink-500 via-red-500 to-yellow-500 bg-clip-text">{children}</h2>
}

export default function LandingPage() {
    return <section className=" w-full text-center mb-0">
        <section data-aos="fade-up" className="bg-gradient-to-br from-blue-500 to-pink-600 w-full py-8">

            <Hero />
        </section>


        <br />
    <MyCustomHeading>Our Mobile App ProtoType</MyCustomHeading>
        <section data-aos="fade-up" className="aspect-video  container p-4 mx-auto max-h-[80vh]">
            <iframe src="https://www.youtube.com/embed/km1kNJwGvps?si=FwiOUXVEcf6f71wV" className="h-full p-2 rounded bg-gradient-to-br to-blue-400 from-green-400 mx-auto aspect-video" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </section>
        <MyCustomHeading>Our Key Features</MyCustomHeading>
        <HomeFeatures />





        {/* <Motivation/>
        <Blog/> */}
    </section>
}