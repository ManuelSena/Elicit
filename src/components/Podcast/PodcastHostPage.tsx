import * as React from "react";
import { FooterContainer } from "../Footer/FooterContainer";
import { IPodcastHostPage } from "../Interfaces/Podcast/IPodcastHostPage";
import { getPodcastHost } from "../../api/podcast/PodcastHostApi";
import { PodcastHostForm } from "./PodcastHostForm";

export interface IPodcastHostState {
    //podcastHostPageState: IPodcastHostPage;
    podcastHostListItems: IPodcastHostPage[];
}

export class PodcastHostPage extends React.Component<{}, IPodcastHostState> {
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

        }
        this.loadData = this.loadData.bind(this);
    }

    public componentDidMount() {
        this.loadData();
    }

    private loadData() {
        getPodcastHost()
            .then((response) => {
                this.setState({ podcastHostListItems: response.items });
                console.log(response)
            }, (err) => { })
            .catch((err) => {
                console.log(err);
            })
    }
  
    public render() {
        return (

          
            <div style={{ textAlign: "center", color: "#f8f8ff", width: "100%", padding: "100px 0 0 100px", backgroundColor: "#000000" }}>
           
                <PodcastHostForm
                    podcastHost={this.state.podcastHostListItems}
                />

            </div>
        )
    }
}