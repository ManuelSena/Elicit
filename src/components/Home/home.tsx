import * as React from "react";
import { Podcast } from "../Podcast/index";
import { AboutUsPage } from "../AboutUs/AboutUsPage";
import { FooterContainer } from "../Footer/FooterContainer";
import { GrayBanner } from "../Banners/GreyBanner";
import { AboutUsForm } from "../AboutUs/AboutUsForm";
//import { ContactUs } from "../ContactUs/ContactUs";

export const HomePage: React.StatelessComponent<{}> = () => {

    return (
        <React.Fragment>
            <div className="home hero-image">
                <a className="btn contactus" href="mailto:Manny@elicit.us">Contact Us</a>
            </div>
            <div>
                <AboutUsPage />
            </div>
            <div>
            <Podcast />
            </div>
        </React.Fragment>

    );
}


//<div className="container">
//    <iframe src='https://s3-us-west-1.amazonaws.com/elicit.us/halfThought1.mp4'
//        frameBorder='0'
//        //allow='autoplay; encrypted-media'
//        allowFullScreen
//        title='video'
//    />
//</div> 