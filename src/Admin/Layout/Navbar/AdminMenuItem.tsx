import { TbChevronDown } from 'react-icons/tb'
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
const variants = {
    open: { opacity: 1, translateY: -10, margin: "0px", height: "100%", display: "block" },
    closed: {
        opacity: 0, translateY: 0, height: "0px", margin: "0px", transitionEnd: {
            display: "none"
        }
    },
}

export default function AdminMenuItem({ open = false, onClose, onOpen, title, hrefList = [], children }: any) {
    const pathname = usePathname()
    return (
        <div className="relative block text-left py-2">
            <div>
                <button onClick={() => {
                    if (open) {
                        onClose();
                    } else {
                        onOpen();
                    }
                }} className={`flex  outline-blue-500 z-20 select-none active:bg-rose-700 justify-between lg:inline-flex transition-colors w-full h-10 items-center lg:h-auto rounded-md px-4 py-4 text-sm font-medium text-white  duration-300 ${open || hrefList.includes(pathname) ? "bg-green-600/90 " : "bg-rose-600 text-white-500"} `}>
                    {title}
                    <TbChevronDown
                        className={`ml-2 -mr-1 h-5 w-5 text-white transition-all ${open ? "rotate-180" : "rotate-0"}`}
                        aria-hidden="true"
                    />
                </button>
                <motion.div
                    initial={{ height: "0px", display: "none" }}
                    animate={open ? "open" : "closed"}
                    variants={variants}
                >
                    <div className={`z-50 border-2 transition-all translate-y-4 p-4 right-0 top-16 min-w-fit  w-full origin-top-right divide-y divide-gray-100 rounded-md bg-slate-200 text-blue-600 shadow-md outline-none`}>
                        {children}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

