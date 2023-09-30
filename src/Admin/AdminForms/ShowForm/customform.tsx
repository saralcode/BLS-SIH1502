"use client"
import { useForm, useFormState } from "react-hook-form";
import { useEffect, useState } from "react";
import { useMotionValue } from "framer-motion";

import { Button } from "@material-tailwind/react";
import { useReactFormState } from "@/Admin/AdminForms/ShowForm/formstate";
import { UserInputs, getSchema } from "@/Admin/AdminForms/Inputs/InputTypes";
import { PageFormData } from "@/Admin/PageData/PageData";
import { MapInputs } from "@/Admin/AdminForms/Inputs/MapInputs";
import Link from "next/link";

export function CustomForm({ userInputs, buttonText, data, isDark = true, onSubmit }: { isDark?: boolean, data?: {}, onSubmit: (data: any) => void, buttonText: string, userInputs: UserInputs[] }) {


    const [progressIndex] = useState("");
    const progress = useMotionValue(0);
    const { setFormValues } = useReactFormState();
    const formData = useForm({
        defaultValues: data ?? {
        },
    });
    useEffect(() => {
        setFormValues(formData);
    }, []);

    const {
        register,
        handleSubmit,
        setValue,
        control,
        resetField,
        formState: { errors },

    } = formData;



    return <div>
        <form className={`form p-2 pb-8 ${isDark && "darkform"}`} onSubmit={handleSubmit(onSubmit)} >
            <MapInputs resetField={resetField} progressIndex={progressIndex} progress={progress} control={control} setValue={setValue}
                userInputs={userInputs} register={register} errors={errors} />
            <div className="gap-6 flex py-8">
                <Button variant="filled" color="green" type="submit">
                    {buttonText}
                </Button>
                <Button onClick={()=>{
                    formData.reset();
                }} variant="filled" color="orange" type="submit">
                    Reset
                </Button>
            </div>
        </form>
    </div>
}