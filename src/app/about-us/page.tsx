import ShowMarkdown from "@/Admin/AdminForms/Inputs/Types/Showmarkdown";
import Title from "@/components/Title/Title";
const about=`We're the students of
> Dr. Shyama Prasad Mukherjee University, Ranchi\\
> Department : Computer Application
- Our team name is **8 Bit Guys**
- Our team has expertise in different fields like **Web Development**, **Android Development**, **Cyber Security**, etc.

### Projects We've worked together
- Our Departmental Website https://dspmu.saralcode.com

### Individual Projects by Our Team Members
- A Blogging Website https://www.saralcode.com
- A School Website https://ssvmptps.in
- A File Sharing Application https://play.google.com/store/apps/details?id=com.saralcode.saralshare
- An E-Commerce Website https://natureitems.com

And a lot of **small projects** that have **not** been **published** online.
`
export default function AboutUsPage(){
    return <div className="container mx-auto p-4">
        <Title isH1>About Us</Title>
        <ShowMarkdown data={about} />
    </div>
}