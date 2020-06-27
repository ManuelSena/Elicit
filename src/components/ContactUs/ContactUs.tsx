import * as React from "react";
//import { IContactUs } from "../Interfaces/ContactUs/IContactUs";
import { ContactUsApi, sendEmailContactUs } from "../../api/contactus/ContactUsApi";
import { Textarea } from "../../common/components/form/index";
import { Input } from "../../common/components/form/input";
import { FooterContainer } from "../Footer/FooterContainer";
//import { ContactUsForm } from "./ContactUsForm";

export interface IContactUs {
    name: string;
    email: string;
    topic: string;
    message: string;
}
export interface IContactUsState {
    contactUs: IContactUs;
}

export class ContactUs extends React.Component<{}, IContactUsState> {
    constructor(props) {
        super(props);
        this.state = {
            contactUs: {
                name: "",
                email: "",
                topic: "",
                message: ""
            }
        }

        //bind
        this.onFieldChange = this.onFieldChange.bind(this);
        this.sendEmailButtonClick = this.sendEmailButtonClick.bind(this);
    }

    private onFieldChange(fieldName: string, fieldValue: string) {

        const nextState = {
            ...this.state,
            contactUs: {
                ...this.state.contactUs,
                [fieldName]: fieldValue
            }
        }
        this.setState(nextState); //, () => { this.validateField(fieldName, fieldValue) });
    }

    private sendEmailButtonClick() {

        ContactUsApi.sendEmailContactUs(this.state.contactUs)

            .then((response) => {
                this.setState({
                    ...this.state,
                    contactUs: {
                        name: "",
                        email: "",
                        topic: "",
                        message: ""
                    }

                })
            })

            .catch((err) => {
                console.log(err);
            })
        
    }


    public render() {
        return (
            <div className="col-md-6 col-sm-12 col-xs-12">
                
                <form action="#" method="post" className="tg-commentform help-form" id="tg-commentform">
                    <fieldset>
                        <div className="form-group">
                          <div className="tg-section-heading"><h2>Contact Elicit</h2></div>

                            <p><strong style={{ color: "red" }} className="contactus">NOTE:</strong> Please use this <a className="contactus" href="mailto:Manny@elicit.us">Contact Us HERE</a>. We'd be stoked to hear from you!</p>




                            <div className="form-group">
                                <Input
                                    type="text"
                                    label="Name"
                                    name="name"
                                    value={this.state.contactUs.name}
                                    placeholder="Name"
                                    onChange={this.onFieldChange}></Input>
                  

                            <div className="form-group">
                                <Input
                                    type="text"
                                    label="Topic"
                                    name="topic"
                                    value={this.state.contactUs.topic}
                                    placeholder="Subject"
                                    onChange={this.onFieldChange}></Input>
                            </div>
                            <div className="form-group">
                                <Input
                                    label="Email"
                                    name="email"
                                    value={this.state.contactUs.email}
                                    placeholder="Email"
                                    onChange={this.onFieldChange}></Input>
                            </div>
                            <div className="form-group">
                                <Textarea
                                    label="Message"
                                    name="message"
                                    value={this.state.contactUs.message}
                                    placeholder="Enter Your Message"
                                    onChange={this.onFieldChange}>
                                    rows={8}</Textarea>
                            </div>
                            <div className="form-group">
                                <button
                                    type="button"
                                    className="contactus"
                                    onClick={this.sendEmailButtonClick}
                                >Send</button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }

}