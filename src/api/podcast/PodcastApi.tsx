import { IPodcastList } from "../../Components/Interfaces/index";
import { apiExecute } from "../../../src/api/apiExecute";

const baseURL = "/";

export const getPodcastList = (): Promise<any> => {
    const getURL = `${baseURL}api/podcast`;
    return apiExecute(getURL, "GET", null)
}

export const postPodcastList = (data: IPodcastList): Promise<any> => {
    const postURL = `/api/podcast`;
    return apiExecute(postURL, "POST", data)
}

export const updatePodcastList = (data: IPodcastList): Promise<any> => {
    const putURL = `${baseURL}api/podcast/${data.id}`;
    return apiExecute(putURL, "PUT", data)
}

export const deletePodcastList = (data: number): Promise<any> => {
    const deleteURL = `${baseURL}api/podcast/${data}`;
    return apiExecute(deleteURL, "DELETE", data)
}

