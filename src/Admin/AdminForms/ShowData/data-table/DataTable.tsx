import { TileData } from "@/Admin/PageData/PageData";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { BsImage } from "react-icons/bs";
import DisplayFile from "../../Inputs/DisplayFile";
import { TbFile } from "react-icons/tb";

export default function ShowDataTable({ results, tileData, currentUrl, setIsOpen }: {
    results: any[], currentUrl: string, tileData: TileData, setIsOpen: React.Dispatch<React.SetStateAction<{
        isOpen: boolean;
        deleteIndex: number;
    }>>
}) {
    const router = useRouter();
    return <div>
        {results.map((value: any, index: number) => {
            return (
                <div
                    data-aos="fade-up"
                    className="rounded-md overflow-x-hidden h-auto min-h-[5rem] flex-col lg:flex-row justify-between my-2 flex w-full border-2 border-white bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-400 via-blue-300 to-indigo-200"
                    key={"newregister" + index}
                >
                    <div className="flex w-full flex-wrap lg:flex-nowrap">
                        {
                            tileData.leading &&
                            <div className="lg:h-full  w-full h-40 lg:max-w-[8rem] max-w-full  relative items-center flex  overflow-hidden">
                                {value[tileData.leading] && Object.keys(value[tileData.leading]).length > 0 ?
                                    <div className="overflow-hidden w-full flex items-center justify-center h-full rounded-md">
                                        <DisplayFile imageCover isLocal file={value[tileData.leading]} />
                                    </div>

                                    : (tileData.leading == "file" ? <TbFile className="h-16  mx-auto my-auto w-16 opacity-50 rounded-md " /> :
                                        <BsImage className="h-16  mx-auto opacity-50 my-auto w-16" />
                                    )}
                            </div>
                        }

                        <div className="flex p-2 text-black bg-white/80 rounded-md md:mx-1 w-full shadow-md my-2 flex-col overflow-clip">
                            <h2 className="my-0 text-xl">{value[tileData.title]}</h2>
                            <h4 className="line-clamp-2 overflow-ellipsis h-fit">
                                {tileData.description &&
                                    tileData.description.type == "date" ? new Date(value[tileData.description.key]).toLocaleDateString("en", {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "numeric"
                                    })
                                    : value[tileData.description.key]}

                            </h4>
                        </div>
                    </div>
                    <div className="flex gap-4 my-auto justify-center flex-wrap  p-4">
                        {tileData.newbutton != null && tileData.newbutton.map((btn, index) => {

                            return <Button key={btn.title} color="orange" variant="filled" onClick={() => {
                                const url = new URL(process.env.NEXT_PUBLIC_BASE_URL + (btn.initialUrl ?? currentUrl));
                                btn.params.forEach(((param) => {
                                    if (value[param.value]) {
                                        url.searchParams.set(param.key, JSON.stringify(value[param.value]))
                                    }
                                }))
                                router.push(url.href);
                            }} >
                                {btn.title}
                            </Button>
                        })
                        }
                        <Button color="green" variant="filled" onClick={() => {
                            router.push(`${currentUrl}?_id=${value['_id']}`);
                        }} >
                            Edit
                        </Button>
                        <Button color="red" variant="filled" onClick={() => {
                            setIsOpen({ isOpen: true, deleteIndex: index });
                        }}>
                            Delete
                        </Button>

                    </div>
                </div>
            );
        })}
    </div>
}