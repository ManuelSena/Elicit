import * as React from "react";
export const AboutUsForm = (props) => {
    return (React.createElement("div", { className: "container", style: { color: "white" } },
        React.createElement("h3", null, "ABOUT US"),
        React.createElement("div", { className: "container" }, props.aboutUs.map(function (d, idx) {
            return (React.createElement("div", { key: idx },
                React.createElement("p", null, d.aboutUsSummary)));
        })),
        React.createElement("div", { className: "container" },
            React.createElement("h1", null, " MEET THE TEAM "),
            props.aboutUs.map(function (about, i) {
                if (about.id > 1) {
                    return (React.createElement("div", { className: "meetthesegents", key: i },
                        React.createElement("img", { src: about.aboutUsPicture, style: { height: 200, width: 100 } }),
                        React.createElement("h2", null, about.aboutName),
                        React.createElement("h3", null, about.aboutNickname),
                        React.createElement("a", { href: "mailto: {about.aboutEmailContact}" }, about.aboutEmailContact),
                        React.createElement("p", null, about.aboutBio),
                        React.createElement("div", { className: "social-media" },
                            React.createElement("a", { className: "fa fa-instagram", target: "_blank", href: about.aboutInstagram }),
                            React.createElement("a", { className: "fa fa-facebook", target: "_blank", href: about.aboutFacebook }),
                            React.createElement("a", { className: "fa fa-linkedin", target: "_blank", href: about.aboutLinkedIn }))));
                }
            }))));
};
//# sourceMappingURL=AboutUsForm.js.map