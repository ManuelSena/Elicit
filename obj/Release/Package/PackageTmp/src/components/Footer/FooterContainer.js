import * as React from "react";
import { PrivatePolicy } from "../PrivatePolicy/PrivatePolicy";
export class FooterContainer extends React.Component {
    render() {
        return (React.createElement("div", { className: "fixed-bottom" },
            React.createElement("footer", null,
                React.createElement("div", { className: "ep-footerbar" },
                    React.createElement("span", { className: "ep-copyright", style: { color: "white" } }, "Elicit \u00A92020  |  All Rights Reserved"),
                    React.createElement("nav", { className: "footer-nav pull-right" },
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                React.createElement(PrivatePolicy, null))))))));
    }
}
//# sourceMappingURL=FooterContainer.js.map