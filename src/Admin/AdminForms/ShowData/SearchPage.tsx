import React, { useEffect, useMemo, useState } from "react";
import { Input, Button, Checkbox, Typography } from "@material-tailwind/react";
import { useAPIData } from "./loadingHook";

export function SearchPage() {
    const { apiResults, searchText, setSearchText, setSearchResults } = useAPIData();
    const [objectKeys, setObjectKeys] = useState<string[]>([]);
    useEffect(() => {
        if (apiResults.length > 0) {
            const keys = Object.keys(apiResults[0]);
            keys.forEach((v: string, index: number) => {
                if (["image", "file", "__v"].includes(v)) {
                    keys.splice(index, 1);
                }
            })

            setObjectKeys(keys);
        }
    }, [apiResults])
    const onChange = ({ target }: { target: HTMLInputElement }) => {
        setSearchText(target.value);
        // console.log(apiData);
    }
    const searchInData = (str: string) => {
        if (str) {
            // const mystring = "Th1e quick brown fox jumps over the lazy dog";
            const foundResult: any[] = [];
            // const
            apiResults.forEach((d) => {

                const values = Object.values(d);
                values.forEach((v: any, index: number) => {
                    if (typeof v == "object") {
                        values.splice(index, 1);
                    }
                })

                const mystring = values.join(" ").toLowerCase();
                const splitted = new RegExp(mystring.replaceAll(" ", "|"), "gi");
                const regExTest = str.match(splitted);
                console.log(regExTest)
                let isFound: boolean = false;
                if (!regExTest) {
                    const stringSearch = mystring.search(str);
                    console.log("String search ", stringSearch)
                    if (stringSearch != -1) {
                        isFound = true;
                    }
                } else {
                    isFound = true;
                }
                if (isFound) {
                    const data = {
                        ...d,
                        total: regExTest ? regExTest.length : 0
                    }
                    foundResult.push(data);

                }
                console.log(isFound)
            });
            const sortedData = foundResult.sort((a, b) => b.total - a.total);
            console.log("sorted Data", sortedData);
            setSearchResults(sortedData);
        }
    }
    useMemo(() => searchInData(searchText.toLowerCase()), [searchText,])


    return (
        <div className="relative flex flex-col mb-8 w-full not-prose ">
            <div className="relative">

                <Input
                    type="text"
                    size="lg"
                    label="Search Here"
                    value={searchText}
                    color="white"
                    onChange={onChange}
                    className="pr-20"
                    containerProps={{
                        className: "min-w-0",
                    }}
                />
                <Button
                    size="sm"
                    color="blue"
                    variant="filled"
                    disabled={!searchText}
                    className="!absolute right-1 top-1 bottom-1 rounded"
                >
                    Search
                </Button>
            </div>
            {/* <div className="flex text-white justify-around  flex-wrap">

                {objectKeys.map((value: string, index: number) => {
                    return <div key={value + index} className="flex items-center justify-center">
                        <Checkbox color="blue" key={"resultKeys" + index} />
                        <Typography>{value}</Typography>
                    </div>
                })}
            </div> */}
        </div>
    );
}