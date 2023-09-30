import Image from "next/image";
const Loading = ({ isAdmin }: { isAdmin?: boolean }) => {
    return <section className={`h-full min-h-[60vh] flex-col ${isAdmin ? "w-full" : "top-0 fixed w-screen left-0  z-60"}  flex justify-center items-center`}>
        <Image unoptimized src="/svgs/loading.svg" height={150} width={150} alt="Nature Items Loading Image" />
    </section>
}
export default Loading;