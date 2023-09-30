import { useEffect, useState } from "react";
import { useReactFormState } from "../../ShowForm/formstate";
import { Chip } from "@material-tailwind/react";

export default function KeywordsInput({ name }: { name: string }) {
    const { formValues, loading } = useReactFormState();
    const [previousValues, setPreviousValues] = useState<Set<string>>(new Set());
    const [controller, setValue] = useState("");
    useEffect(() => {
        const value = formValues?.control._defaultValues[name] as string;
        if (value) {
            setPreviousValues(new Set([...value.split(",")]));
        }

    }, [loading, formValues?.control._defaultValues, name])


    return <div>
        <div className="flex flex-wrap p-2 gap-2">
            {Array.from(previousValues?.keys()).map((value: string, index: number) => {
                return <Chip variant="filled" color={index % 2 == 0 ? "red" : "blue"} key={value + index} value={value} onClose={() => {
                    previousValues.delete(value);
                    setPreviousValues(new Set(previousValues));
                    formValues?.setValue(name, Array.from(previousValues.values()).join(","))
                }} />
            })}
        </div>
        <input type="text" placeholder={"Enter "+name} value={controller} onChange={(e) => {
            const value = e.target.value
            const splited = value.split(",");
            if (splited.length > 1) {
                previousValues.add(splited[0].trim().toLowerCase());
                setPreviousValues(previousValues);
                formValues?.setValue(name, Array.from(previousValues.values()).join(","))
                setValue("");
            } else {
                if (value.length == 1 && value == " ") {
                    setValue(value.trim());
                } else {
                    setValue(value);
                }
            }
        }} />
    </div>

}