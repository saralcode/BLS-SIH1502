import { twMerge } from "tailwind-merge";

export default function Title({ children, isH1 = false, className = "" }: { children: React.ReactNode, isH1?: boolean, className?: string }) {
  const classData = twMerge(
    "font-extrabold py-1 text-transparent text-center inline-block text-4xl bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400",
    className
  )
  if (isH1) {
    return <h1 className={classData}>{children}</h1>;
  } else {
    return <h2 data-aos="zoom-in" className={classData}>{children}</h2>;
  }
}
