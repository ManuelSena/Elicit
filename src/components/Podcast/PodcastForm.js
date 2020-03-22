import * as React from "react";
import { Input, Button, Textarea } from "../../common/components/form/index";
export const PodcastForm = (props) => {
    return (React.createElement("div", { className: "an-single-component" },
        React.createElement("div", { className: "an-formarea" },
            React.createElement("div", { className: "an-component-header grey-bg" },
                React.createElement("h1", null, "Welcome")),
            React.createElement("div", { className: "an-component-body" },
                React.createElement("div", { className: "an-helper-block" },
                    React.createElement("form", null,
                        React.createElement("fieldset", null,
                            React.createElement("div", { className: "form-group" },
                                React.createElement(Input, { label: "Name", name: "typeName", value: props.podcastList.typeName, placeholder: "Enter Name", onChange: props.onChange })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement(Textarea, { label: "Details", name: "details", value: props.podcastList.details, placeholder: "Enter Your Details", onChange: props.onChange })),
                            React.createElement(Button, { className: "an-btn an-btn-primary", label: "Submit", onClick: props.onSubmit }),
                            React.createElement(Button, { className: "an-btn an-btn-primary", label: "Update", onClick: props.onUpdate }))))))));
};
//# sourceMappingURL=PodcastForm.js.map