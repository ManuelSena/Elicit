import * as React from "react";
import { Link } from "react-router";
import { FooterContainer } from "../Footer/FooterContainer";
export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    //<div className="fixed-top" style={{ width: "100 % ", float: "left", padding: "30px 0", overflow: "hidden", backgroundColor: "#000000" }} >
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "nav" },
                React.createElement("div", { className: "eheader" },
                    React.createElement("strong", null,
                        React.createElement("a", { href: "#", className: "glow pull-left" }, "Elicit"))),
                React.createElement("div", { className: "mainListDiv" },
                    React.createElement(Link, { to: "/home", className: "btn" }, "Home"),
                    React.createElement(Link, { to: "/podcast", className: "btn " }, "Podcast"),
                    React.createElement(Link, { to: "/about", className: "btn " }, "About"),
                    React.createElement(Link, { to: "/rss", className: "btn" }, "RSS Feed"),
                    React.createElement(Link, { to: "/contactus", className: "btn" }, "Contact Us"))),
            React.createElement(FooterContainer, null)));
    }
}
//# sourceMappingURL=header.js.map