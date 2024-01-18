import { IFilteredData } from "@/contexts/homeContext";
import { Api } from "@/utils/axiosConfig";

export interface ICustomersData {
    id: number;
    fullName: string;
    gender: string;
    dateOfBirth: string;
    age: number;
    city_id: {
        id: number;
        name: string;
        state: string;
    }
}

export interface IRegisterCustomer {
    fullName: string
    gender: string
    dateOfBirth: string
    age: string
    city_id: number
}

const getAllOrFiltered = async (fullName: string, filteredCity: IFilteredData): Promise<ICustomersData[] | Error> => {
    try {
        const relativeUrl = `/customer?fullName=${fullName}&city_id.name=${filteredCity.filteredCity}&city_id.state=${filteredCity.filteredState}`

        const {data} = await Api.get(relativeUrl);

        return data;
    } catch (error) {
        return new Error((error as {message: string}).message || "Error to listing customers")
    }
}

const deleteById = async (id: number): Promise<void | Error> => {
    try {
        await Api.delete(`/customer/${id}`)
    } catch (error) {
        return new Error((error as {message: string}).message || "Error to listing customers")
    }
}

const registerCustomer = async (data: IRegisterCustomer): Promise<IRegisterCustomer | Error> => {
    try {
        const response = await Api.post(`/customer`, data)
        return response.data
    } catch (error) {
        return new Error((error as {message: string}).message || "Error to listing customers")
    }
}

export const customerService = {
    getAllOrFiltered,
    deleteById,
    registerCustomer
}