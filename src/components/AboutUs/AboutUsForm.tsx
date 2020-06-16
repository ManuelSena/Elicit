import * as React from "react"
import { IAboutUsPage } from "../../components/Interfaces/index";
import { Button } from "../../common/components/form/button";

interface IAboutPageIndexSingle {
    aboutUs: IAboutUsPage[];
}

export const AboutUsForm: React.StatelessComponent<IAboutPageIndexSingle> = (props: IAboutPageIndexSingle) => {
    return (
        <div className="container" style={{ color: "white" }}>
            <h3>ABOUT US</h3>
            <div className="container">
                {props.aboutUs.map(function (d, idx) {
                    return (
                        <div key={idx}>
                            <p>{d.aboutUsSummary}</p>
                        </div>
                    )
                })}
            </div>

            <div className="container">
                <h1> MEET THE TEAM </h1>
                {props.aboutUs.map(function (about, i) {
                    if (about.id > 1) {
                        return (
                            <div className="meetthesegents" key={i}>
                                <img src={about.aboutUsPicture} style={{ height: 200, width: 100 }} />
                                <h2>{about.aboutName}</h2>
                                <h3>{about.aboutNickname}</h3>
                                <a href="mailto: {about.aboutEmailContact}">{about.aboutEmailContact}</a>
                                <p>{about.aboutBio}</p>
                                <div className="social-media">
                                    <a className="fa fa-instagram" target="_blank" href={about.aboutInstagram}></a>
                                    <a className="fa fa-facebook" target="_blank" href={about.aboutFacebook}></a>
                                    <a className="fa fa-linkedin" target="_blank" href={about.aboutLinkedIn}></a>
                                </div>
                            </div>

                        )
                    }
                })}
            </div>
        </div>

    )


};