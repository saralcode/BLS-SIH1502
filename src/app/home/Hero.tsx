"use client"
import ShowMarkdown from "@/Admin/AdminForms/Inputs/Types/Showmarkdown";
import Title from "@/components/Title/Title";
import { Button } from "@material-tailwind/react";

const listData = [
    {
        text: "**Hybrid Solution** for teachers with Both **Web** and **App** (Android/IOS) Solutions with **Separate  Dashboards.**"
    },
    {
        text: "Teachers can provide **Study materials** to students as well as conduct **MCQs** or **short answer** tests."
    },
    {
        text: "Student's **performance will be measured** on the basis of **Tests, access to the course content, doubts asked,** etc. "
    },
    {
        text: "Teachers get a **complete analysis** and **Alerts** of each student's **strengths** and **weaknesses**.  And a **high-level view of the class.**"
    },
    {
        text: "Students can **publish their doubts** which can be resolved by his/her teacher."
    },
    {
        text: "**AI Chatbot** to solve student's **doubts instantly.**"
    },
    {
        text: "Teachers can solve the doubt face-to-face or provide solutions to the student in any form - **videos**, **PDFs**, **Images**, etc."
    },
    {
        text: "Study-related **Short Videos** with **in-between** Questions can be uploaded by Teachers/Students (to use the new age bad habit in a positive way)."
    },

]

export default function Hero() {
    return (
        <section className="relative mx-auto bg-white/70 rounded shadow-md container p-4">

            <Title isH1 className="text-center">
                Government of India&apos;s Education Enhancement Initiative
            </Title>
            <ul className="text-left not-prose marker:text-blue-500 ">

                {listData.map((value, index) => {
                    return <li data-aos="fade-up" data-aos-delay={"400"} key={"listItemsdata"+index} className="rounded px-4 py-2.5 my-4 leading-none bg-white text-base md:text-lg"><ShowMarkdown data={value.text} /></li>
                })}
            </ul>

            <Button data-aos="fade-up" variant="filled" color="green" onClick={(e) => {
                e.currentTarget.scrollIntoView({ behavior: "smooth", block: "start" })
            }}>

                Get Started
            </Button>




            <div>

            </div>
        </section>
    );
}
