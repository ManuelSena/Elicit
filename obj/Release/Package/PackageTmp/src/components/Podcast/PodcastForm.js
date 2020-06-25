import * as React from "react";
import { Input, Button, Textarea } from "../../common/components/form/index";
export const PodcastForm = (props) => {
    return (React.createElement("div", { className: "an-single-component", style: { color: "white" } },
        React.createElement("div", { className: "an-formarea" },
            React.createElement("div", { className: "an-component-header grey-bg" },
                React.createElement("h1", null, "Podcasts")),
            React.createElement("div", { className: "an-component-body" },
                React.createElement("div", { className: "an-helper-block" },
                    React.createElement("form", null,
                        React.createElement("fieldset", null,
                            React.createElement("div", { className: "form-group" },
                                React.createElement(Input, { label: "Name", name: "podcastName", value: props.podcastList.podcastName, placeholder: "Enter Name", onChange: props.onChange })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement(Textarea, { label: "Details", name: "podcastDetails", value: props.podcastList.podcastDetails, placeholder: "Enter Your Details", onChange: props.onChange })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement(Input, { label: "Upload Video", name: "podcastVideoUpload", value: props.podcastList.podcastVideoUpload, placeholder: "Upload Video", onChange: props.onChange })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement(Input, { label: "Upload Picture", name: "podcastPictureUpload", value: props.podcastList.podcastPictureUpload, placeholder: "Upload Picture", onChange: props.onChange })),
                            React.createElement(Button, { className: "an-btn an-btn-primary", label: "Submit", onClick: props.onSubmit }),
                            React.createElement(Button, { className: "an-btn an-btn-primary", label: "Update", onClick: props.onUpdate }))))))));
};
//# sourceMappingURL=PodcastForm.js.map