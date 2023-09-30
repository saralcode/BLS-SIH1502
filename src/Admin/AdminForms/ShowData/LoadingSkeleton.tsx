import { TileData } from "@/Admin/PageData/PageData";
import { BsImage } from "react-icons/bs";

export default function LoadingSkeleton({ tileData }: { tileData: TileData }) {
    return Array.from(Array(5)).map((value: any, index: number) => {
        return <div key={"skeleton" + index} className="rounded-md h-auto min-h-[5rem] animate-pulse flex-col md:flex-row justify-between my-2 flex w-full bg-slate-800">
            <div className="flex w-full">
                {
                    tileData.leading &&
                    <div className="h-full min-w-[8rem] max-w-xs relative items-center flex overflow-hidden">
                        <BsImage className="h-16  mx-auto my-auto w-16 text-slate-600" />
                    </div>
                }

                <div className="flex gap-3 p-2 text-black flex-col w-full">
                    <div className="w-1/2 h-6 bg-slate-600 rounded-xl">
                    </div>
                    <div className="w-3/4 h-6 bg-slate-600 rounded-xl">
                    </div>
                </div>
            </div>
            <div className="flex gap-4 h-16 py-3 my-auto justify-center pr-4">

                <div className="w-20 h-full rounded-2xl bg-slate-600"></div>
                <div className="w-20 h-full rounded-2xl bg-slate-600"></div>
                {/* <button className="btnred" >Delete</button> */}
            </div>
        </div>
    })


}