import * as React from "react";
export const PodcastHostForm = (props) => {
    return (React.createElement("div", { className: "container" },
        React.createElement("h1", null, " MEET THE TEAM "),
        props.podcastHost.map(function (podcastHost, i) {
            if (podcastHost.id > 1) {
                return (React.createElement("div", { className: "meetthesegents", key: i },
                    React.createElement("img", { src: podcastHost.podcastHostPicture, style: { height: 200, width: 100 } }),
                    React.createElement("h2", null, podcastHost.podcastHostName),
                    React.createElement("h3", null, podcastHost.podcastHostNickname),
                    React.createElement("a", { href: "mailto: {podcastHost.PodcastHostEmailContact}" }, podcastHost.podcastHostEmailContact),
                    React.createElement("p", null, podcastHost.podcastHostBio),
                    React.createElement("div", { className: "social-media" },
                        React.createElement("a", { className: "fa fa-instagram", target: "_blank", href: podcastHost.podcastHostInstagram }),
                        React.createElement("a", { className: "fa fa-facebook", target: "_blank", href: podcastHost.podcastHostFacebook }),
                        React.createElement("a", { className: "fa fa-linkedin", target: "_blank", href: podcastHost.podcastHostLinkedIn }))));
            }
        })));
};
//# sourceMappingURL=PodcastHostForm.js.map