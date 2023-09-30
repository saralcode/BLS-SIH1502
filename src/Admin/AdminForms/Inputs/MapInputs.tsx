import React, { useState } from "react";
import { UserInputs } from "./InputTypes";
import { UseFormRegister, FieldValues, UseFormSetValue, Control, UseFormResetField } from "react-hook-form"
import Datepicker from "react-tailwindcss-datepicker";
import { MotionValue } from "framer-motion";
import { ProgressBar } from "../../../components/ProgressBar/ProgressBar";
import { DateValueType } from "react-tailwindcss-datepicker/dist/types";
import DisplayFile, { imageTypes } from "./DisplayFile";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import ReferenceField from "./Types/ReferenceInput";
import SwitchInput from "./Types/switch-input";
import KeywordsInput from "./Types/KeywordsInput";
import ShowMarkdown from "./Types/Showmarkdown";
import { useReactFormState } from "../ShowForm/formstate";
import ShowError from "./ShowError";
import { FileType, PublicFileType } from "@/backend/models/types/field_types";
import imageCompressor from 'browser-image-compression'
import Label from "./ShowLabel";
export function MapInputs({ control, setValue, progressIndex, progress, userInputs, register }:
    { control: Control, setValue: UseFormSetValue<{}>, resetField: UseFormResetField<FieldValues>, progressIndex: string, progress: MotionValue, userInputs: UserInputs[], register: UseFormRegister<FieldValues>, errors: any }) {
    const [state, setState] = useState(0);
    const [image, setImage] = useState<{ [k: string]: PublicFileType | null }>({});
    const { errors, formValues } = useReactFormState();
    return <>
        {userInputs.map((value, index) => {
            if (value.type === "switch") {
                return <SwitchInput key={value.name + index} label={value.label ?? value.name} name={value.name} />
            }
            else if (value.type === "select") {
                return <div key={value.name + index} className="my-4">
                    <Label isRequired={value.required}>{value.label ?? value.name}</Label>
                    <select disabled={value.disabled} {...register(value.name)} required={value.required} >
                        {/* <option hidden disabled selected>Select {value.name}</option> */}
                        {value.optons.map((optionValue, optionIndex) => {
                            return <option key={value.name + optionIndex} value={optionValue.value}>{optionValue.text}</option>
                        })}
                    </select>
                </div>

            }
            else if (value.type == "date") {
                return <div key={value.name + index}>
                    <Label isRequired={value.required}>{value.label ?? value.name}</Label>
                    <Datepicker
                        showShortcuts
                        useRange={false}
                        asSingle
                        inputClassName={"text-base"}
                        maxDate={value.maxDate}
                        minDate={value.minDate}
                        popoverDirection="down"
                        value={{ startDate: new Date(control._formValues[value.name]), endDate: new Date(control._formValues[value.name]) }}
                        onChange={(date) => {
                            console.log(date);
                            if (date != null) {

                                setValue(value.name as never, date.startDate as never);
                            }
                            setState(state + 1);

                        }} />
                    <p className="error">{errors[value.name]}</p>
                </div>
            }
            else if (value.type === "daterange") {
                return <div key={value.name + index}>
                    <Label isRequired={value.required}>{value.label ?? value.name}</Label>
                    <Datepicker
                        showShortcuts
                        useRange={true}
                        // asSingle
                        separator="to"
                        readOnly
                        showFooter
                        inputClassName={"text-base"}
                        maxDate={value.maxDate}
                        minDate={value.minDate}
                        popoverDirection="down"
                        value={control._formValues[value.name] ? { startDate: new Date(control._formValues[value.name].startDate), endDate: new Date(control._formValues[value.name].endDate) } : { startDate: new Date(), endDate: new Date() }}
                        onChange={(date: DateValueType) => {
                            // console.log(date);
                            if (date?.startDate != null && date.endDate != null) {
                                setValue(value.name as never, {
                                    startDate: new Date(date?.startDate).toISOString(),
                                    endDate: new Date(date?.endDate).toISOString(),
                                } as never);
                            }
                            // console.log(new Date(date.startDate).toISOString())
                            setState(state + 1);

                        }} />
                    <ShowError name={value.name} />
                </div>
            }
            else if (value.type == "textarea") {
                return <div key={value.name + index}>
                    <Label isRequired={value.required}>{value.label ?? value.name}</Label>
                    <textarea
                        placeholder={"Enter " + value.name}
                        className="form-input"
                        aria-multiline
                        rows={4}
                        required={value.required}
                        maxLength={value.maxLength}
                        {...register(value.name)}
                    />
                    <ShowError name={value.name} />
                </div>
            }
            else if (value.type == "image" || value.type == "file") {
                const currentValue = control._defaultValues[value.name];
                return <div key={value.name + index} className="relative max-w-md ">

                    {currentValue && Object.values(currentValue).length > 0 &&
                        <div className="p-2 text-white flex flex-wrap ">
                            <DisplayFile file={currentValue} showOpen />
                            <div className="my-2">



                                {!value.required && <Button onClick={() => {
                                    formValues?.resetField(value.name, {
                                        defaultValue: null
                                    });

                                }} variant="filled" color="red" >Delete</Button>}


                            </div>
                        </div>
                    }
                    <Label isRequired={value.required}>{value.label ?? value.name}</Label>

                    {image[value.name] != null &&
                        <DisplayFile isLocal file={image[value.name]!} />

                    }

                    <input type="file" {...register(value.name)} onChange={async (e) => {
                        if (e.target.files) {
                            const file = e.target.files[0];
                            if (value.type == "image" && imageTypes.includes(file.type)) {
                                const blob = await imageCompressor(file, {
                                    maxSizeMB: parseInt(value.maxSize),
                                    maxWidthOrHeight: parseInt(value.maxHeightOrWidth),
                                    useWebWorker: true,
                                })
                                let newfile = new File([blob], file.name, {
                                    type: file.type,
                                    lastModified: new Date().getTime()
                                });
                                let container = new DataTransfer();
                                container.items.add(newfile);
                                e.target.files = container.files;
                                const reader = new FileReader();
                                reader.onloadend = function () {
                                    setImage((old) => {
                                        return {
                                            ...old,
                                            [value.name]: { fileType: newfile.type, url: reader.result as string, name: value.name }
                                        }
                                    });

                                }
                                reader.readAsDataURL(newfile);
                            } else {
                                setImage((old) => {
                                    return {
                                        ...old,
                                        [value.name]: { fileType: file.type, url: "", name: value.name }
                                    }
                                })
                            }
                        }
                    }} placeholder="file" accept={value.type == "image" ? "image/png, image/gif, image/jpeg" : undefined} />
                    {progressIndex == value.name &&
                        <ProgressBar value={progress} />
                    }
                    <ShowError name={value.name} />
                </div>
            }
            if (value.type == "time") {
                return <div key={value.name + index}>
                    <Label isRequired={value.required}>{value.label ?? value.name}</Label>
                    <input id={value.name} type="time" required={value.required} onFocus={(e) => e.target.showPicker()} className=" fill-white bg-white text-white" {...register(value.name)}  ></input>
                    <ShowError name={value.name} />
                </div>
            }
            if (value.type == "reference") {
                return <div key={"reference" + index}>
                    <Label isRequired={value.required}>{value.label ?? value.name}</Label>
                    <ReferenceField name={value.name} tileData={value.tileData} url={value.apiUrl} />
                </div>
            }
            if (value.type == "keywords") {
                return <div key={"keywords" + index} className="my-4">
                    <Label isRequired={value.required}>{value.label}</Label>
                    <KeywordsInput name={value.name} />
                </div>

            }
            if (value.type == "info") {
                return <ShowMarkdown key={"markdownInfo" + index} data={value.markdown} />
            }
            return <div key={value.name + index}>
                <Label isRequired={value.required}>{value.label ?? value.name}</Label>
                <input
                    placeholder={"Enter " + value.name}
                    type={value.type}
                    className="form-input"
                    id={value.name}
                    required={value.required}
                    {...register(value.name)}
                />
                <ShowError name={value.name} />
            </div>
        })
        }
    </>
}