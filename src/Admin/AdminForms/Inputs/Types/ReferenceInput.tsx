import { Fragment, useEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import { TileData } from '@/Admin/PageData/PageData';
import { useReactFormState } from '../../ShowForm/formstate';
import { Button } from '@material-tailwind/react';
export default function ReferenceField({ url, tileData, name }: { url: string, tileData: TileData, name: string }) {
    const [data, setData] = useState<any[]>([]);
    const { formValues, loading } = useReactFormState();
    const [filtered, setFiltered] = useState<any[]>([]);
    const [selected, setSelected] = useState<any>();
    const [query, setQuery] = useState('');
    // const [loadi, setLoading] = useState(false);
    useEffect(() => {
        try {
            // setLoading(true);
            if (url) {

                axios.get(url).then((res) => {
                    if (res.status == 200) {
                        const resData = res.data as any[];
                        const _id = formValues?.control._defaultValues["_id"];
                        if (_id) {
                            const index = resData.findIndex((v) => v['_id'] == _id);
                            if (index != -1) {
                                resData.splice(index, 1);
                            }
                        }
                        setData(resData);
                    }
                }).catch((er) => { })
            }
        } catch (error) {
            console.log(error);
        }
        // setLoading(false);
        console.log(url);
    }, [loading, name, formValues?.control._defaultValues, url])
    useEffect(() => {
        const filterData =
            query === ''
                ? data
                : data.filter((d: any) =>
                    d[tileData.title]
                        .toLowerCase()
                        .replace(/\s+/g, '')
                        .includes(query.toLowerCase().replace(/\s+/g, ''))
                );
        setFiltered(filterData);

    }, [query, loading, data])


    useEffect(() => {
        const defaultValue = formValues?.control._defaultValues[name];
        console.log("Default Value", defaultValue);
        if (defaultValue) {
            const idIndex = data.findIndex((v: any) => v['_id'] == defaultValue);
            if (idIndex != -1) {
                setSelected(data[idIndex]);
            }
        }
    }, [data, loading, formValues?.control._defaultValues]);

    // const register = formValues?.register(name);
    return (
        <div>
            {/* <Button variant='filled' color='red' onClick={() => {
                // console.log(name);
                console.log(name)
                console.log(formValues?.control._formValues);
            }}>
                Click Me
            </Button> */}
            <Combobox value={selected} onChange={(v: any) => {
                setSelected(v);
                formValues?.setValue(name, v['_id']);
            }}>
                <div className="relative mt-1 rounded-md">
                    <div className="relative w-full cursor-default rounded-lg  text-left">
                        <Combobox.Input
                            className="w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 "
                            // name={name}
                            autoFocus={false}
                            placeholder='Search'
                            displayValue={(selectedValue: any) => selectedValue[tileData.title]}
                            // value={selected ? selected["_id"] : null}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        {/* <input type='text' style={{display:"none"}} value={selected ? selected["_id"] : null} name={name}  /> */}
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute z-60 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filtered.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filtered.map((person: any, index: number) => (
                                    <Combobox.Option
                                        key={"customkey" + index}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                                            }`
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {person[tileData.title]};
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}
