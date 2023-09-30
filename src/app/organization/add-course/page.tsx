
import { ShowForm } from "@/Admin/AdminForms/ShowForm/ShowForm";
import { PageFormData } from "@/Admin/PageData/PageData";

const data: PageFormData = {
    currentURL: "",
    title: "Course",
    apiURL: "",
    paths: [],
    description: "Add a teacher in your school/college",
    userInputs: [
        { type: "text", name: "label", label: "Course Label", required: true, },
        { type: "textarea", name: "description", label: "Course Description", required: true, },
        // {
        //     type: "reference", name: "class", label: "For Class", apiUrl: "", tileData: {
        //         title: "", description: {
        //             key: ""
        //         }
        //     }, required: true,
        // }

    ]
}

const AddTeacher = () => {
    return <div className="container mx-auto"> <ShowForm isDark={false} props={data} isUpdate={false} /></div>
}
export default AddTeacher;