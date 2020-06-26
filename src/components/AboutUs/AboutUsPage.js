import * as React from "react";
import { getAboutUs } from "../../api/aboutus/AboutUsApi";
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
    //<AboutUsForm
    //    aboutUs={this.state.aboutUsListItems}
    ///>
    render() {
        return (React.createElement("div", { style: { textAlign: "center", color: "#f8f8ff", width: "100%", padding: "30px 30px", backgroundColor: "#000000" } },
            React.createElement("p", null, " Elicit is dedicated to the creation & maintaining of community connections between groups and individuals whose lives are enmeshed in the Music, Art, and Entertainment Industry. Our priority is to facilitate the support of bands, groups, and people involved in order to spread their creative work and personal message.     We work for the Aspiring and Inspiring.")));
    }
}
//# sourceMappingURL=AboutUsPage.js.map