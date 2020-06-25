import { apiExecute } from "../apiExecute";
export const sendEmailContactUs = (data) => {
    const sendEmailContactUsURL = `/api/contactUs`;
    return apiExecute(sendEmailContactUsURL, "POST", data);
};
export const ContactUsApi = {
    sendEmailContactUs
};
//# sourceMappingURL=ContactUsApi.js.map