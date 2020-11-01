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

            
        </div>

    )


};