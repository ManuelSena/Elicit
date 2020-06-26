import * as React from "react";
import { FooterContainer } from "../Footer/FooterContainer";
import { IAboutUsPage } from "../Interfaces/aboutus/IAboutUsPage";
import { getAboutUs } from "../../api/aboutus/AboutUsApi";
import { AboutUsForm } from "./AboutUsForm";

export interface IAboutUsState {
    aboutUsPageState: IAboutUsPage;
    aboutUsListItems: IAboutUsPage[];
}

export class AboutUsPage extends React.Component<{}, IAboutUsState> {
    constructor(props) {
        super(props);
        this.state = {
            aboutUsPageState: {
                id: 0,
                aboutUsSummary: "",
                aboutUsPicture: "",
                aboutName: "",
                aboutTitle: "",
                aboutNickname: "",
                aboutBio: "",
                aboutInstagram: "",
                aboutFacebook: "",
                aboutLinkedIn: "",
                aboutEmailContact: "",
            },
            aboutUsListItems: [],

        }
        this.loadData = this.loadData.bind(this);
    }

    public componentDidMount() {
        this.loadData();
    }



    private loadData() {
        getAboutUs()
            .then((response) => {
                this.setState({ aboutUsListItems: response.items });
                console.log(response)
            }, (err) => { })
            .catch((err) => {
                console.log(err);
            })
    }

    public render() {
        return (
            <div style={{ textAlign: "center", color: "#f8f8ff", width: "100%", padding: "30px 30px", backgroundColor: "#000000" }}>
               <p> Elicit is dedicated to the creation & maintaining of community connections between groups and individuals whose lives are enmeshed in the Music, Art, and Entertainment Industry. Our priority is to facilitate the support of bands, groups, and people involved in order to spread their creative work and personal message.     We work for the Aspiring and Inspiring.
    </p>
        


                <AboutUsForm
                    aboutUs={this.state.aboutUsListItems}
                />
             </div>
               )
    }
}