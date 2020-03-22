import { apiExecute } from "../../api/apiExecute";
const baseURL = "/";
export const getPodcastList = () => {
    const getURL = `${baseURL}api/podcast`;
    return apiExecute(getURL, "GET", null);
};
export const postPodcastList = (data) => {
    const postURL = `/api/podcast`;
    return apiExecute(postURL, "POST", data);
};
export const updatePodcastList = (data) => {
    const putURL = `${baseURL}api/podcast/${data.id}`;
    return apiExecute(putURL, "PUT", data);
};
export const deletePodcastList = (data) => {
    const deleteURL = `${baseURL}api/podcast/${data}`;
    return apiExecute(deleteURL, "DELETE", data);
};
//# sourceMappingURL=PodcastApi.js.map