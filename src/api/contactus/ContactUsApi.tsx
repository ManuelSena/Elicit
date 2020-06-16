import { apiExecute } from "../apiExecute";
import { IContactUs } from "../../components/ContactUs/ContactUs";

export const sendEmailContactUs = (data: IContactUs): Promise<any> => {
    const sendEmailContactUsURL = `/api/contactUs`;
    return apiExecute(sendEmailContactUsURL, "POST", data)
}

export const ContactUsApi = {
    sendEmailContactUs
}