import * as React from "react";
import { getAboutUs } from "../../api/aboutus/AboutUsApi";
import { AboutUsForm } from "./AboutUsForm";
export class AboutUsPage extends React.Component {
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
        };
        this.loadData = this.loadData.bind(this);
    }
    componentDidMount() {
        this.loadData();
    }
    loadData() {
        getAboutUs()
            .then((response) => {
            this.setState({ aboutUsListItems: response.items });
            console.log(response);
        }, (err) => { })
            .catch((err) => {
            console.log(err);
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(AboutUsForm, { aboutUs: this.state.aboutUsListItems })));
    }
}
//# sourceMappingURL=AboutUsPage.js.map