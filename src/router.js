import * as React from "react";
import { Route, browserHistory, IndexRoute, Router } from "react-router";
import { App } from "./app";
import { HomePage } from "./components/Home/Home";
import { Podcast } from "./components/Podcast/Podcast";
export const AppRouter = () => {
    return (React.createElement(Router, { history: browserHistory },
        React.createElement(Route, { path: "/", component: App },
            React.createElement(IndexRoute, { component: HomePage }),
            React.createElement(Route, { path: "/home", component: HomePage }),
            React.createElement(Route, { path: "/podcast", component: Podcast }))));
};
//# sourceMappingURL=router.js.map