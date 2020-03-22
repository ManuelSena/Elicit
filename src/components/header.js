import * as React from "react";
import { Link } from "react-router";
export const Header = () => {
    return (React.createElement("div", null,
        React.createElement(Link, { to: "/home", className: "btn btn-primary" }, "Home"),
        React.createElement(Link, { to: "/podcast", className: "btn btn-warning" }, "Podcast"),
        React.createElement(Link, { to: "/about", className: "btn btn-primary" }, "About")));
};
//# sourceMappingURL=header.js.map