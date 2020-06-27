import * as React from "react";
import { Podcast } from "../Podcast/index";
import { AboutUsPage } from "../AboutUs/AboutUsPage";
//import { ContactUs } from "../ContactUs/ContactUs";
export const HomePage = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "home hero-image" },
            React.createElement("a", { className: "btn contactus", href: "mailto:Manny@elicit.us" }, "Contact Us")),
        React.createElement("div", null,
            React.createElement(AboutUsPage, null)),
        React.createElement("div", null,
            React.createElement(Podcast, null))));
};
//<div className="container">
//    <iframe src='https://s3-us-west-1.amazonaws.com/elicit.us/halfThought1.mp4'
//        frameBorder='0'
//        //allow='autoplay; encrypted-media'
//        allowFullScreen
//        title='video'
//    />
//</div> 
//# sourceMappingURL=Home.js.map