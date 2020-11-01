import { apiExecute } from "../../../src/api/apiExecute";
const baseURL = "/";
export const getPodcastHost = () => {
    const getURL = `${baseURL}api/podcasthost`;
    return apiExecute(getURL, "GET", null);
};
export const postPodcastHost = (data) => {
    const postURL = `/api/podcasthost`;
    return apiExecute(postURL, "POST", data);
};
export const updatePodcastHost = (data) => {
    const putURL = `${baseURL}api/podcasthost/${data.id}`;
    return apiExecute(putURL, "PUT", data);
};
export const deletePodcastHost = (data) => {
    const deleteURL = `${baseURL}api/podcasthost/${data}`;
    return apiExecute(deleteURL, "DELETE", data);
};
//# sourceMappingURL=PodcastHostApi.js.map