import * as React from "react";
import { getPodcastHost } from "../../api/podcast/PodcastHostApi";
import { PodcastHostForm } from "./PodcastHostForm";
export class PodcastHostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //podcastHostPageState: {
            //    id: 0,
            //    podcastHostPicture: "",
            //    podcastHostName: "",
            //    podcastHostTitle: "",
            //    podcastHostNickname: "",
            //    podcastHostFavoriteBands: "",
            //    podcastHostBio: "",
            //    podcastHostInstagram: "",
            //    podcastHostFacebook: "",
            //    podcastHostLinkedIn: "",
            //    podcastHostEmailContact: "",
            //    displayOrder: 0
            //},
            podcastHostListItems: [],
        };
        this.loadData = this.loadData.bind(this);
    }
    componentDidMount() {
        this.loadData();
    }
    loadData() {
        getPodcastHost()
            .then((response) => {
            this.setState({ podcastHostListItems: response.items });
            console.log(response);
        }, (err) => { })
            .catch((err) => {
            console.log(err);
        });
    }
    render() {
        return (React.createElement("div", { style: { textAlign: "center", color: "#f8f8ff", width: "100%", padding: "100px 0 0 100px", backgroundColor: "#000000" } },
            React.createElement(PodcastHostForm, { podcastHost: this.state.podcastHostListItems })));
    }
}
//# sourceMappingURL=PodcastHostPage.js.map