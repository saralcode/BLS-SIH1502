import { useScroll } from "framer-motion"
import { useEffect, useState } from "react"
import { BsFillArrowUpSquareFill } from 'react-icons/bs'
export default function BackToTop() {
  const { scrollY } = useScroll()
  const [isVisible, setVisible] = useState(false)
  useEffect(() => {
    return scrollY.on("change", ((latest) => {
      if (latest > 50) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }))
  }, [scrollY])
  return <div className={`z-60 fixed transition-all shadow-md duration-500 bottom-5 right-5 text-purple-500 hover:text-purple-600 cursor-pointer active:scale-105  ${!isVisible ? "translate-y-20" : "translate-y-0"} `} onClick={() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }} ><BsFillArrowUpSquareFill className="h-7 rounded-md w-7 bg-white text-inherit" /></div>
}