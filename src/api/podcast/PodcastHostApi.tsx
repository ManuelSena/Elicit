import { apiExecute } from "../../../src/api/apiExecute";
import { IPodcastHostPage } from "../../components/interfaces/Podcast/IPodcastHostPage";

const baseURL = "/";

export const getPodcastHost = (): Promise<any> => {
    const getURL = `${baseURL}api/podcasthost`;
    return apiExecute(getURL, "GET", null)
}

export const postPodcastHost = (data: IPodcastHostPage): Promise<any> => {
    const postURL = `/api/podcasthost`;
    return apiExecute(postURL, "POST", data)
}

export const updatePodcastHost = (data: IPodcastHostPage): Promise<any> => {
    const putURL = `${baseURL}api/podcasthost/${data.id}`;
    return apiExecute(putURL, "PUT", data)
}

export const deletePodcastHost = (data: number): Promise<any> => {
    const deleteURL = `${baseURL}api/podcasthost/${data}`;
    return apiExecute(deleteURL, "DELETE", data)
}





