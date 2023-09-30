import axios from "axios";
import { useEffect, useState } from "react";
import { create } from 'zustand'
// export function useAPIData({ url = "", }: { url?: string }) {
//     const [loading, setLoading] = useState(false);
//     const [data, setData] = useState<any[]>([]);
//     const [searchResults, setSearchResults] = useState<any[]>([]);
//     useEffect(() => {
//         if (url) {
//             setLoading(true);
//             axios
//                 .get(url)
//                 .then((res) => {
//                     setData(res.data);
//                     setLoading(false);
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                     setLoading(false);
//                 });
//         }
//     }, [url]);
//     console.log(data);
//     return { loading: loading,apiData:data, data: searchResults.length > 0 ? searchResults : data, setData, setSearchResults };
// }





type NavProps = {
    apiData: any[]
    menuOpenIndex?: number,
}

interface NavigationState {
    apiResults: any[],
    loading: boolean,
    searchText: string,
    searchResults: any[],
    setSearchResults: (data: any[]) => void,
    setApiResults: (data: any[]) => void,
    setSearchText: (text: string) => void

    // setNavigationState: (props: NavProps) => void
}
export const useAPIData = create<NavigationState>()((set) => ({
    apiResults: [], searchText: "", loading: true, searchResults: [],
    setSearchResults(data) {
        set({ searchResults: data }, false);
    },
    setApiResults(data) {
        set({ apiResults: data, loading: false }, false);

    },
    setSearchText(text) {
        set({ searchText: text }, false);
    },
}))