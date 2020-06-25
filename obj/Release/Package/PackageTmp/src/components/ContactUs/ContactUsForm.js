//import { IContactUs } from "../Interfaces/ContactUs/IContactUs";
//import * as React from "react";
//import { Input, Textarea, Button } from "../../common/components/form";
//interface IContactUsForm {
//    contactUs: IContactUs;
//    onChange: (fieldName: string, value: string) => void;
//    onSubmit: () => void;
//}
//export const ContactUsForm: React.StatelessComponent<IContactUsForm> = (props: IContactUsForm) => {
//    return (
//        <div className="col-md-6 col-sm-12 col-xs-12">
//            <form action="#" method="post" className="tg-commentform help-form" id="tg-commentform">
//                <fieldset>
//                    <div className="form-group">
//                        <div className="tg-section-heading"><h2>Contact Elicit</h2></div>
//                        <div className="form-group">
//                            <Input
//                                type="text"
//                                label="Name"
//                                name="contactUsName"
//                                value={props.contactUs.name}
//                                placeholder="Name"
//                                onChange={props.onChange}></Input>
//                        </div>
//                        <div className="form-group">
//                            <Input
//                                type="text"
//                                label="Subject"
//                                name="contactUsSubject"
//                                value={props.contactUs.subject}
//                                placeholder="Subject"
//                                onChange={props.onChange}></Input>
//                        </div>
//                        <div className="form-group">
//                            <Input
//                                label="Email"
//                                name="contactUsEmail"
//                                value={props.contactUs.email}
//                                placeholder="Email"
//                                onChange={props.onChange}></Input>
//                        </div>
//                        <div className="form-group">
//                            <Textarea
//                                label="Message"
//                                name="podcastMessage"
//                                value={props.contactUs.message}
//                                placeholder="Enter Your Message"
//                                onChange={props.onChange}></Textarea>
//                        </div>
//                        <div className="form-group">
//                            <Button className="an-btn an-btn-primary"
//                                label="Submit"
//                                onClick={props.onSubmit}
//                            ></Button>
//                        </div>
//                    </div>
//                </fieldset>
//            </form>
//        </div>
//    )
//}
//# sourceMappingURL=ContactUsForm.js.map