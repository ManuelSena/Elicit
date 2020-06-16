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
            <div>
                <AboutUsForm
                    aboutUs={this.state.aboutUsListItems}
                />
             </div>
               )
    }
}