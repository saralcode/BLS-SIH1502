"use client"
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { AiFillFileUnknown } from "react-icons/ai";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { IconType } from "react-icons/lib";
import { twMerge } from 'tailwind-merge'
export const imageTypes = ["image/png", "image/apng", "image/avif", "image/gif", "image/svg+xml", "image/jpeg", "image/webp"];

import axios from "axios";
import { FileType, PublicFileType } from "@/backend/models/types/field_types";
const currentDate = new Date().toISOString();



export default function DisplayFile({ file, isLocal, showBorder = true, showOpen = false, showDownload = false, imageCover, centered = false }:
    { isLocal?: boolean, file: PublicFileType, showBorder?: boolean, imageCover?: boolean, showOpen?: boolean, showDownload?: boolean, centered?: boolean }) {
    return <div className={`my-0 ${centered && "flex items-center flex-col justify-center"} `}>
        <DisplayFileForWrapper file={file} showBorder={showBorder} imageCover={imageCover} isLocal={isLocal} />
        <div className={`flex gap-6 ${centered && "justify-around"}`}>
            {showOpen && file.url &&
                <Link href={file.url} target="_blank" rel="noreferrel" >
                    <Button variant="filled" color="blue"> Open</Button>
                </Link>
            }
            {/* {showDownload && file.url &&
                <Link href={"/api/download?file=" + file.name} target="_blank" rel="noreferrel">
                    <Button variant="filled" color="red"> Download</Button>
                </Link>
            } */}
        </div>
    </div>
}

function DisplayFileForWrapper({ isLocal, file, showBorder = true, imageCover }: { file: PublicFileType, isLocal?: boolean, showBorder?: boolean, imageCover?: boolean }) {
    if (!file.url && !isLocal) {
        return <></>
    }
    if (imageTypes.includes(file.fileType)) {
        return <Image unoptimized height={imageCover ? undefined : isLocal ? 200 : 350} width={imageCover ? undefined : isLocal ? 200 : 350} className={imageCover ? "object-cover my-0" : `${showBorder ? " displayImage m-2 border-2" : ""} max-h-[50vh]  p-2 m-0 object-contain`} src={isLocal ? file.url : `${file.url}?date=${currentDate}`} alt="imagefile" layout={imageCover ? "fill" : undefined} />
    }
    if (file.fileType == "application/pdf") {
        return <ShowIcon Icon={BsFileEarmarkPdfFill} className="text-rose-600" isLocal={isLocal} />
    }
    return <div>
        <ShowIcon Icon={AiFillFileUnknown} className="text-orange-600" isLocal={isLocal} />
        {/* <h3 className="text-rose-500 font-bold my-2">Unknown fileType</h3> */}
    </div>

}


function ShowIcon({ Icon, className = "", isLocal }: { Icon: IconType, className?: string, isLocal?: boolean }) {
    return <Icon className={twMerge(isLocal ? "h-20 w-20" : "h-40 w-40", className, "my-2")} />
}