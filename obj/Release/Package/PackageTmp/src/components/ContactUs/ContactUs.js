import * as React from "react";
//import { IContactUs } from "../Interfaces/ContactUs/IContactUs";
import { ContactUsApi } from "../../api/contactus/ContactUsApi";
import { Textarea } from "../../common/components/form/index";
import { Input } from "../../common/components/form/input";
export class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactUs: {
                name: "",
                email: "",
                topic: "",
                message: ""
            }
        };
        //bind
        this.onFieldChange = this.onFieldChange.bind(this);
        this.sendEmailButtonClick = this.sendEmailButtonClick.bind(this);
    }
    onFieldChange(fieldName, fieldValue) {
        const nextState = Object.assign({}, this.state, { contactUs: Object.assign({}, this.state.contactUs, { [fieldName]: fieldValue }) });
        this.setState(nextState); //, () => { this.validateField(fieldName, fieldValue) });
    }
    sendEmailButtonClick() {
        ContactUsApi.sendEmailContactUs(this.state.contactUs)
            .then((response) => {
            this.setState(Object.assign({}, this.state, { contactUs: {
                    name: "",
                    email: "",
                    topic: "",
                    message: ""
                } }));
        })
            .catch((err) => {
            console.log(err);
        });
    }
    render() {
        return (React.createElement("div", { className: "col-md-6 col-sm-12 col-xs-12" },
            React.createElement("form", { action: "#", method: "post", className: "tg-commentform help-form", id: "tg-commentform" },
                React.createElement("fieldset", null,
                    React.createElement("div", { className: "form-group" },
                        React.createElement("div", { className: "tg-section-heading" },
                            React.createElement("h2", null, "Contact Elicit")),
                        React.createElement("p", null,
                            React.createElement("strong", { style: { color: "red" }, className: "contactus" }, "NOTE:"),
                            " Please use this ",
                            React.createElement("a", { className: "contactus", href: "mailto:Manny@elicit.us" }, "Contact Us HERE"),
                            ". We'd be stoked to hear from you!"),
                        React.createElement("div", { className: "form-group" },
                            React.createElement(Input, { type: "text", label: "Name", name: "name", value: this.state.contactUs.name, placeholder: "Name", onChange: this.onFieldChange }),
                            React.createElement("div", { className: "form-group" },
                                React.createElement(Input, { type: "text", label: "Topic", name: "topic", value: this.state.contactUs.topic, placeholder: "Subject", onChange: this.onFieldChange })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement(Input, { label: "Email", name: "email", value: this.state.contactUs.email, placeholder: "Email", onChange: this.onFieldChange })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement(Textarea, { label: "Message", name: "message", value: this.state.contactUs.message, placeholder: "Enter Your Message", onChange: this.onFieldChange },
                                    "rows=",
                                    8)),
                            React.createElement("div", { className: "form-group" },
                                React.createElement("button", { type: "button", className: "contactus", onClick: this.sendEmailButtonClick }, "Send"))))))));
    }
}
//# sourceMappingURL=ContactUs.js.map