import { Api } from "@/utils/axiosConfig";

export type TCityData = {
    id: number;
    name: string;
    state: string;
}

const getAllOrFiltered = async (name: string = "", state:string = ""): Promise<TCityData[] | Error> => {
    try {
        const {data}  = await Api.get(`/city?name=${name}&state=${state}`)
        return data
    } catch (error) {
        return new Error((error as {message: string}).message || "Error to listing customers")
    }
}

export const cityService = {
    getAllOrFiltered
}