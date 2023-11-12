import Title from "@/components/Title/Title";
import HomeFeatures from "../home/Features";
import Link from "next/link";
const roles = [
    {
        name: "Organization",
        link: "/organization",
        Icon: FaUniversity
    },
    {
        name: "Teacher",
        link: "/teacher",
        Icon: FaChalkboardTeacher
    },
    {
        name: "Student",
        link: "/student",
        Icon: FaUserGraduate
    },
]
import { FaUniversity, FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa'; // Import icons from react-icons
function WebVersion() {
    return <section className="container mx-auto p-4">
        <Title isH1>Simple Web Version</Title>
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-6 text-center">View Dashboards as</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 space-x-4">
            {
                roles.map((value, index) => {
                    return <Link data-aos="fade-up" key={value.link} href={value.link} className={`${index == 0 ? "text-blue-500 hover:bg-blue-500" : index == 1 ? "text-pink-500 hover:bg-pink-500" : "text-green-500 hover:bg-green-500"} flex items-center hover:text-white transition-all duration-300 ease-in-out justify-center aspect-square bg-white p-8 rounded-md shadow-md no-underline group`}>
                        <div className="flex flex-col items-center group-hover:scale-110 transition-all">
                            <value.Icon size={80} />
                            <p className=" font-bold text-xl">{value.name}</p>
                        </div>
                    </Link>
                })
            }



        </div>
    </section>
}
export default WebVersion;