'use client'
import { useDebounce } from "@/hooks/useDebounce";
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";

export interface IFilteredData {
    filteredCity: String | undefined
    filteredState: String | undefined
}

type AuthContextType = {
    setSearchByName: Dispatch<SetStateAction<String | undefined>>;
    setFilteredData: Dispatch<SetStateAction<IFilteredData | undefined>>
};

export const searchContext = createContext({} as AuthContextType);

export function  SearchHomeProvider({children}: any){
    const { debounce } = useDebounce(2000)

    const [searchByName, setSearchByName] = useState<String>();
    const [filteredData, setFilteredData] = useState<IFilteredData>();

    useEffect(() =>{
        debounce(() => {
            console.log(searchByName)
        })
    }, [searchByName, debounce])
    useEffect(() => {
        console.log(filteredData)
    }, [filteredData])

    return (
        <searchContext.Provider value={{setSearchByName, setFilteredData}}>
            {children}
        </searchContext.Provider>
    )
}