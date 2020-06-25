import { apiExecute } from "../../../src/api/apiExecute";
const baseURL = "/";
export const getPrivatePolicyList = () => {
    const getURL = `${baseURL}api/privatepolicy`;
    return apiExecute(getURL, "GET", null);
};
export const postPrivatePolicyList = (data) => {
    const postURL = `/api/privatepolicy`;
    return apiExecute(postURL, "POST", data);
};
export const updatePrivatePolicyList = (data) => {
    const putURL = `${baseURL}api/privatepolicy/${data.id}`;
    return apiExecute(putURL, "PUT", data);
};
export const deletePrivatePolicyList = (data) => {
    const deleteURL = `${baseURL}api/privatepolicy/${data}`;
    return apiExecute(deleteURL, "DELETE", data);
};
export const PrivatePolicyApi = {
    getPrivatePolicyList, postPrivatePolicyList, updatePrivatePolicyList, deletePrivatePolicyList
};
//# sourceMappingURL=PrivatePolicyApi.js.map