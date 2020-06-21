import * as React from "react";
import { Route, IndexRoute, Router, hashHistory } from "react-router";
import { App } from "./app";
import { HomePage } from "./components/Home/Home";
import { Podcast } from "./components/Podcast/Podcast";
import { AboutUsPage } from "./components/AboutUs/AboutUsPage";
import { RssFeed } from "./components/RssFeed/RssFeed";
import { PrivatePolicy } from "./components/PrivatePolicy/PrivatePolicy";
import { ContactUs } from "./components/ContactUs/ContactUs";
export const AppRouter = () => {
    return (React.createElement(Router, { history: hashHistory },
        React.createElement(Route, { path: "/", component: App },
            React.createElement(IndexRoute, { component: HomePage }),
            React.createElement(Route, { path: "#/home", component: HomePage }),
            React.createElement(Route, { path: "#/podcast", component: Podcast }),
            React.createElement(Route, { path: "#/about", component: AboutUsPage }),
            React.createElement(Route, { path: "#/rss", component: RssFeed }),
            React.createElement(Route, { path: "#/contactus", component: ContactUs }),
            React.createElement(Route, { path: "#/privatepolicy", component: PrivatePolicy }))));
};
//# sourceMappingURL=router.js.map