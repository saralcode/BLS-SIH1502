import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/legacy/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.module.css";
import { motion } from 'framer-motion'

import { Autoplay, EffectCreative } from "swiper";
const contentData = [
    { title: "Dr. SPM University, Ranchi", subtitle: "eiusmod est. Magna commodo sit dolore culpa cupidatat aute consectetur aliqua ea excepteur eu labore. Proident Est et exercitation eu sint in incididunt nisi." },
    { title: "Extra Activities", subtitle: "Dolor dolore eu sunt nostrud Lorem culpa est ipsum ut pariatur eiusmod est. Magna commodo sit dolore culpa cupidatat aute consectetur aliqua ea excepteur eu labore. Proident" },
    { title: "Great Infrastructure ", subtitle: "Dolor dolore eu sunt nostrud Lorem culpa est ipsum ut pariatur eiusmod est. Magna commodo sit dolore culpa cupidatat aute consectetur aliqua ea excepteur eu labore. Proident" },
    { title: "Latest Technologies", subtitle: "Dolor dolore eu sunt nostrud Lorem culpa est ipsum ut pariatur eiusmod est. Magna commodo sit dolore culpa cupidatat aute consectetur aliqua ea excepteur eu labore. Proident" }

]
export default function Slider() {
    return (
        <Swiper

            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            rewind={true}
            creativeEffect={{
                prev: {
                    // shadow: true,
                    translate: [0, 0, -500],
                },
                next: {
                    translate: ["100%", 0, 0],
                },
            }}
            effect="creative"
            // loop
            // pagination={{
            //     clickable: true,
            // }}
            // navigation={true}
            modules={[Autoplay, EffectCreative]}

        >
            {contentData.map((value, index) => {
                return <SwiperSlide  key={"swiperSlide" + index} className="text-4xl relative w-full h-[80vh] md:h-screen">

                     <TransparentComponent title={value.title} subtitle={value.subtitle} />

                    <Image src={`/banner/image${index + 1}.jpg`} layout="fill" objectFit="cover" />
                </SwiperSlide>
            })}
        </Swiper>
    );
}


function TransparentComponent({ title = "", subtitle = '' }) {

    return <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="sliderView scrollbarhide bg-slate-900/50 backdrop-blur-[1px] px-2 max-w-screen md:max-w-5xl left-0 max-w-[99vw] md:p-8 absolute z-10 md:min-w-[45rem] text-white max-h-48 md:max-h-64 md:min-h-[15rem] top-0">
        <h2 className="my-2 md:m-0 max-w-base w-full pr-4 md:max-w-5xl text-2xl md:text-4xl text-white text-left">
            <motion.span initial={{ width: "0px", wordBreak: "keep-all", whiteSpace: "nowrap", overflow: "hidden", display: "block" }} transition={{ delay: 0.5, duration: 1, }} whileInView={{ width: "100%", transitionEnd: { wordBreak: "break-word", whiteSpace: "nowrap", } }}  >
                {title}
            </motion.span>
        </h2>

        <motion.p className="scrollbarhide text-left h-40 overflow-y-auto text-base md:text-xl pt-3 md:pt-7 w-full max-w-[85%] whitespace-pre-wrap break-all pr-4" initial={{ translateY: 1, opacity: 0 }} transition={{ delay: 0.7, duration: 1 }} whileInView={{ translateY: 0, opacity: 1 }} >
                {subtitle}
            </motion.p>

    </motion.div>
}