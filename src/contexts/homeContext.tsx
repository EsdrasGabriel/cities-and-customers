'use client'
import { useDebounce } from "@/hooks/useDebounce";
import { TCityData, cityService } from "@/services/cityService";
import { ICustomersData, IRegisterCustomer, customerService } from "@/services/customerService";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";

export interface IFilteredData {
    filteredCity: string | undefined
    filteredState: string | undefined
}

type AuthContextType = {
    setSearchByName: Dispatch<SetStateAction<string>>;
    setFilteredData: Dispatch<SetStateAction<IFilteredData>>
    filteredCustomers: ICustomersData[] | undefined
    setIdForDelete: Dispatch<SetStateAction<number | undefined>>
    filteredCities: TCityData[] | undefined
    setRegisterCustomer: Dispatch<SetStateAction<IRegisterCustomer | undefined>>
};

export const searchContext = createContext({} as AuthContextType);

export function  SearchHomeProvider({children}: any){
    const { debounce } = useDebounce(2000)

    const router = useRouter();

    const [searchByName, setSearchByName] = useState<string>("");
    const [filteredData, setFilteredData] = useState<IFilteredData>({
        filteredCity: "",
        filteredState: "",
    });
    const [idForDelete, setIdForDelete] = useState<number>();
    const [filteredCustomers, setFilteredCustomers] = useState<ICustomersData[]>();
    const [filteredCities, setFilteredCities] = useState<TCityData[]>();
    const [registerCustomer, setRegisterCustomer] = useState<IRegisterCustomer>();

    useEffect(() =>{
        debounce(() => {
            customerService.getAllOrFiltered(searchByName, filteredData)
            .then(result => {
                if (result instanceof Error) {
                    return alert(result.message)
                } else {
                    setFilteredCustomers(result)
                }
            })
        })
        if (!registerCustomer) return;
        customerService.registerCustomer(registerCustomer)
        .then(result => {
            if (result instanceof Error) {
                return alert(result.message)
            }
            router.push("/")
        })
    }, [searchByName, debounce, filteredData, registerCustomer, router])
    useEffect(()=> {
        if (!idForDelete) return;
        customerService.deleteById(idForDelete)
        .then(result => {
            if(result instanceof Error) {
                return alert(result.message)
            }
        })
    },  [idForDelete])
    useEffect(() => {
        cityService.getAllOrFiltered()
        .then(result => {
            if (result instanceof Error) {
                return alert(result.message)
            } else {
                setFilteredCities(result)
            }
        })
    }, [])

    return (
        <searchContext.Provider value={{setSearchByName, setFilteredData, filteredCustomers, setIdForDelete, filteredCities, setRegisterCustomer}}>
            {children}
        </searchContext.Provider>
    )
}