import * as React from "react";
export const AboutUsForm = (props) => {
    return (React.createElement("div", { className: "container", style: { color: "white" } },
        React.createElement("h3", null, "ABOUT US"),
        React.createElement("div", { className: "container" }, props.aboutUs.map(function (d, idx) {
            return (React.createElement("div", { key: idx },
                React.createElement("p", null, d.aboutUsSummary)));
        }))));
};
//# sourceMappingURL=AboutUsForm.js.map