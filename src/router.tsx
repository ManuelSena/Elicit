﻿import * as React from "react";
import { Route, browserHistory, IndexRoute, Router, hashHistory } from "react-router";
import { App } from "./app";
import { HomePage } from "./components/Home/Home";
import { Podcast } from "./components/Podcast/Podcast";
import { AboutUsPage } from "./components/AboutUs/AboutUsPage";
import { RssFeed } from "./components/RssFeed/RssFeed";
import { FooterContainer } from "./components/Footer/FooterContainer";
import { PrivatePolicy } from "./components/PrivatePolicy/PrivatePolicy";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { PodcastHostPage } from "./components/Podcast/PodcastHostPage";

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage} />
                <Route path="/home" component={HomePage} />
                <Route path="/podcast" component={Podcast} />
                <Route path="/about" component={PodcastHostPage} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="/privatepolicy" component={PrivatePolicy} />
                
            </Route>
        
        </Router>
        
    );
}