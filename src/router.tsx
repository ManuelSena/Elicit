import * as React from "react";
import { Route, browserHistory, IndexRoute, Router } from "react-router";
import { App } from "./app";
import { HomePage } from "./components/Home/Home";
import { ElicitPodcast } from "./components/Podcast/Podcast";

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage} />
                <Route path="/home" component={HomePage} />
                <Route path="/podcast" component={ElicitPodcast} />
        </Route>
      </Router>
    );
}