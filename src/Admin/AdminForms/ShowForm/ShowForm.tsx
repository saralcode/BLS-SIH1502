"use client"
import { useForm, useFormState } from "react-hook-form";
import Title from "../../../components/Title/Title";
import { MapInputs } from "../Inputs/MapInputs";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserInputs, getSchema } from "../Inputs/InputTypes";
import { PageFormData } from "../../PageData/PageData";
import { useEffect, useState } from "react";
import { useMotionValue } from "framer-motion";

import { Button } from "@material-tailwind/react";
import { ServerAction } from "./action";
import { useReactFormState } from "./formstate";
import { toast } from "react-toastify";
import { TbProgress } from "react-icons/tb";


export function ShowForm({ props, isUpdate, id, defaultValues, isDark = true }: { isDark?: boolean, props: PageFormData, id?: string, isUpdate: boolean, defaultValues?: {} }) {
    const schema = getSchema(props.validator)
    const apiURL = new URL(props.apiURL, process.env.NEXT_PUBLIC_BASE_URL);
    if (id) {
        apiURL.searchParams.set("_id", id);
    }
    const [progressIndex, setProgressIndex] = useState("");
    const progress = useMotionValue(0);

    const router = useRouter();
    const { setFormValues, setErrors } = useReactFormState();
    const formData = useForm({
        defaultValues: defaultValues ?? {
        },
        // reValidateMode: "onChange",
        mode: "all",

        resolver: yupResolver(schema),
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
    useEffect(() => {
        const customError: {
            [key: string]: string
        } = {};
        Object.keys(errors).forEach((key: string) => {
            customError[key] = errors[key]?.message as string;
        })
        setErrors(customError);
    }, [errors])
    const [isSubmitting, setSubmitting] = useState(false);
    // const [unsavedChanges, setUnsavedChanges] = useState(false);
    // const warningText =
    //     'You have unsaved changes - are you sure you wish to leave this page?'

    // useEffect(() => {

    //     const handleWindowClose = (e: any) => {
    //         if (!unsavedChanges) return
    //         e.preventDefault()
    //         return (e.returnValue = warningText)
    //     }
    //     const handleBrowseAway = () => {
    //         if (!unsavedChanges) return
    //         if (window.confirm(warningText)) return
    //         Router.events.emit('routeChangeError')
    //         throw 'routeChange aborted.'
    //     }
    //     window.addEventListener('beforeunload', handleWindowClose)
    //     Router.events.on('routeChangeStart', handleBrowseAway)
    //     return () => {
    //         window.removeEventListener('beforeunload', handleWindowClose)
    //         Router.events.off('routeChangeStart', handleBrowseAway)
    //     }
    // }, [unsavedChanges])


    const onSubmit = async (data: any) => {
        // setUnsavedChanges(true);
        let isError: boolean = false;
        // console.log(errors)
        console.log(data);
        setSubmitting(true);
        if (props.folderName) {
            const objectKeys = Object.keys(data);
            for (let index = 0; index < objectKeys.length; index++) {
                try {
                    const currentIndexData = data[objectKeys[index]];
                    if (currentIndexData instanceof FileList) {
                        const currentInput = props.userInputs.find((v) => v.name == objectKeys[index]) as UserInputs;
                        if (currentInput.type == "file" || currentInput.type == "image") {
                            let file = currentIndexData[0] as File;
                            console.log("File ", file);
                            const defaultValue = defaultValues != null && Object.keys(defaultValues).includes(currentInput.name) ? defaultValues[currentInput.name as keyof typeof defaultValues] : null;
                            console.log("Default Values ", defaultValue);
                            if (defaultValues && Object.keys(defaultValues).length > 0 && typeof file == "undefined") {
                                data[currentInput.name] = defaultValue;
                                continue;
                            }
                            if (!file && currentInput.required == false) {
                                console.log("File Not Selected");
                                data[currentInput.name] = null;
                                continue;
                            }
                            if (!file && currentInput.required) {
                                console.log("File required");
                                const error: any = {}
                                error[currentInput.name] = "It is mandatory to upload file.";
                                setErrors(error);
                                isError = true;
                                break;

                            }

                            const res = await axios.post("/api/admin/getsignedurl",
                                { name: file.name, folderName: props.folderName, size: file.size, _id: id, key: currentInput.name });
                            // console.log(res.data);
                            setProgressIndex(currentInput.name);

                            const UploadResponse = await axios.put(res.data.url, file, {
                                headers: { "Content-Type": file.type }, onUploadProgress: (progressEvent) => {
                                    const { loaded } = progressEvent;
                                    console.log(loaded / file.size);
                                    let percent = Math.floor((loaded * 100) / file.size);
                                    if (percent < 100) {
                                        // progress.set(percent);
                                        // console.log(loaded / total);
                                        progress.set(loaded / file.size);
                                    }
                                },
                            },)
                            progress.set(1)
                            if (UploadResponse.status == 200) {
                                data[currentInput.name] = {
                                    url: `https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.ap-south-1.amazonaws.com/${res.data.filename}?updated=${new Date().toISOString()}`,
                                    name: res.data.filename,
                                    fileType: file.type,
                                }
                                id = res.data._id;
                                data["_id"] = res.data._id
                            }
                        }
                    }
                } catch (error) {
                    isError = true;
                    console.log("Error ", error);
                }
            }
        }
        // if(data)
        // console.log("Data ", data)
        if (!isError) {

            axios({ url: apiURL.href, data: data, method: !isUpdate ? "post" : "put" })
                .then(async (res) => {
                    console.log(res.data);
                    // setUnsavedChanges(false);
                    if (res.status == 203) {
                        console.log(res.data);
                        setErrors(res.data);
                        toast.error("Validation Failed!");
                        setSubmitting(false);
                        progress.set(0);
                        setProgressIndex("");
                        const errorElement = Object.keys(res.data);
                        if (errorElement.length > 0) {
                            const doc = document.getElementById(errorElement[0]);
                            doc?.scrollIntoView({ behavior: "smooth", block: "center" },);
                        }
                    } else {

                        setErrors({});

                        if (isUpdate) {
                            const paths = [props.currentURL, ...props.paths]

                            if (props.dynamicRevalidate && defaultValues != undefined) {
                                props.dynamicRevalidate.forEach((dv) => {
                                    try {
                                        paths.push(dv.initial + defaultValues[dv.value as keyof typeof defaultValues]);
                                    } catch (error) {

                                    }
                                })
                            }
                            await ServerAction(paths)

                        } else {
                            await ServerAction([props.currentURL, ...props.paths])

                        }
                        toast.success(`${isUpdate ? "Updated" : "Saved"} Successfully!`);
                        router.replace(props.currentURL);
                        setSubmitting(false);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("Something went wrong...!");
                    setSubmitting(false);
                });
        } else {
            toast.error("Opps! Error Occured");
            setSubmitting(false);
        }
        // setUnsavedChanges(false);

    };


    return <div className="not-prose">
        <Title isH1>{!isUpdate ? "Add" : "Update"} {props.title}</Title>
        <form className={`form p-2 pb-8 ${isDark && "darkform"}`} onSubmit={handleSubmit(onSubmit)} >
            <MapInputs resetField={resetField} progressIndex={progressIndex} progress={progress} control={control} setValue={setValue}
                userInputs={props.userInputs} register={register} errors={errors} />
            <div className="gap-6 flex py-8">
                <Button variant="filled" color="green" type="submit" className="flex gap-2 items-center justify-center" disabled={isSubmitting}>
                    {isSubmitting &&
                        <TbProgress className="h-5 w-5 text-white animate-spin" />
                    }
                    {!isUpdate ? isSubmitting ? "Submitting" : "Submit" : isSubmitting ? "Updating" : "Update"}
                </Button>
                <Button
                    color="red"
                    variant="filled"
                    type="button"
                    onClick={() => {
                        router.back();
                    }}
                >
                    Back
                </Button>
            </div>
        </form>
    </div>
}