
import { ShowForm } from "@/Admin/AdminForms/ShowForm/ShowForm";
import { PageFormData } from "@/Admin/PageData/PageData";

const data: PageFormData = {
    currentURL: "",
    title:"Teacher",
    apiURL: "",
    paths: [],
    description: "Add a teacher in your school/college",
    userInputs: [
        { type: "text", name: "name", label: "Teacher Name", required: true, },
        { type: "text", name: "email", label: "Teacher Email", required: true, },
        { type: "phone", name: "phone", label: "Teacher Phone", required: true, },
        { type: "keywords", name: "subjects", label: "Subjects Taught", required: true },
    ]
}

const AddTeacher = ()=>{
    return <div className="container mx-auto"> <ShowForm isDark={false} props={data} isUpdate={false} /></div>
}
export default AddTeacher;