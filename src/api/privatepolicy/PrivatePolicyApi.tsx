import { apiExecute } from "../../../src/api/apiExecute";
import { IPrivatePolicyPage } from "../../components/interfaces/privatepolicy/IPrivatePolicyPage";

const baseURL = "/";

export const getPrivatePolicyList = (): Promise<any> => {
    const getURL = `${baseURL}api/privatepolicy`;
    return apiExecute(getURL, "GET", null)
}

export const postPrivatePolicyList = (data: IPrivatePolicyPage): Promise<any> => {
    const postURL = `/api/privatepolicy`;
    return apiExecute(postURL, "POST", data)
}

export const updatePrivatePolicyList = (data: IPrivatePolicyPage): Promise<any> => {
    const putURL = `${baseURL}api/privatepolicy/${data.id}`;
    return apiExecute(putURL, "PUT", data)
}

export const deletePrivatePolicyList = (data: number): Promise<any> => {
    const deleteURL = `${baseURL}api/privatepolicy/${data}`;
    return apiExecute(deleteURL, "DELETE", data)
}


export const PrivatePolicyApi = {
    getPrivatePolicyList, postPrivatePolicyList, updatePrivatePolicyList, deletePrivatePolicyList
}