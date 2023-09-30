
import { ShowForm } from "@/Admin/AdminForms/ShowForm/ShowForm";
import { PageFormData } from "@/Admin/PageData/PageData";

const data: PageFormData = {
    currentURL: "",
    title: "Subject",
    apiURL: "",
    paths: [],
    description: "Add a Subject ",
    userInputs: [
        { type: "text", name: "name", label: "Subject Name", required: true, },
        { type: "textarea", name: "description", label: "Subject Description", required: true, },
        {
            type: "select", optons: [
                { text: "1", value: "1" },
                { text: "2", value: "2" },
                { text: "3", value: "3" },
            ], name: "semester", required: true
        }
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