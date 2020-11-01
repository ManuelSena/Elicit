import * as React from "react";
import { getPodcastList, postPodcastList, updatePodcastList, deletePodcastList } from "../../../src/api/podcast/PodcastApi";
import Iframe from 'react-iframe';
export class Podcast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            podcastList: {
                id: 0,
                podcastName: "",
                podcastDetails: "",
                podcastUploadDate: new Date(),
                podcastVideoUpload: "",
                podcastPictureUpload: "",
            },
            podcastListItems: [],
        };
        //bind here please
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.loadDataList = this.loadDataList.bind(this);
        this.listButtonClick = this.listButtonClick.bind(this);
        this.clearStateAndForm = this.clearStateAndForm.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    onFieldChange(fieldName, fieldValue) {
        const nextState = Object.assign({}, this.state, { podcastList: Object.assign({}, this.state.podcastList, { [fieldName]: fieldValue }) });
        this.setState(nextState);
    }
    listButtonClick(id, action) {
        let ndx = this.state.podcastListItems.findIndex(x => x.id === id);
        if (action === "edit") {
            if (ndx >= 0) {
                this.setState({ podcastList: this.state.podcastListItems[ndx] });
            }
        }
        else if (action === "delete") {
            this.state.podcastListItems.splice(ndx, 1);
            let itms = [
                ...this.state.podcastListItems
            ];
            this.onDeleteClick(id);
            this.loadDataList();
        }
    }
    clearStateAndForm() {
        this.setState({
            podcastList: {
                id: 0,
                podcastName: "",
                podcastDetails: "",
                podcastUploadDate: new Date(),
                podcastVideoUpload: "",
                podcastPictureUpload: "",
            },
            podcastListItems: [],
        });
    }
    onSubmit() {
        postPodcastList(this.state.podcastList)
            .then((response) => {
            console.log("POST");
            this.clearStateAndForm();
            this.loadDataList();
            console.log(response);
        }, (err) => {
        })
            .catch((err) => {
            console.log(err);
        });
    }
    ;
    onUpdate() {
        updatePodcastList(this.state.podcastList)
            .then((response) => {
            console.log("PUT");
            this.clearStateAndForm();
            this.loadDataList();
        }, (err) => { }).catch((err) => {
            console.log(err);
        });
    }
    onDeleteClick(id) {
        deletePodcastList(id)
            .then((response) => {
            this.loadDataList();
        }, (err) => { }).catch((err) => { });
    }
    loadDataList() {
        getPodcastList()
            .then((response) => {
            this.setState({ podcastListItems: response.items });
            console.log(response);
        }, (err) => { }).catch((err) => { });
    }
    componentDidMount() {
        this.loadDataList();
    }
    render() {
        return (React.createElement("div", { className: "podcast" },
            React.createElement("h2", null, "Podcast"),
            React.createElement(Iframe, { url: "https://oembed.libsyn.com/embed?item_id=16631408", src: "//html5-player.libsyn.com/embed/episode/id/16631408/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/f30c0c/", width: "75%", height: "150px", id: "punchBoxProduction", display: "inline", className: "betoPodcast" })));
        //return (
        //    <div className="container">
        //        <PodcastForm
        //            podcastList={this.state.podcastList}
        //            onChange={this.onFieldChange}
        //            onSubmit={this.onSubmit}
        //            onUpdate={this.onUpdate}
        //        />
        //        <PodcastList
        //            dataItems={this.state.podcastListItems}
        //            onButtonClick={this.listButtonClick}
        //            showDeleteButton={true}
        //            showEditButton={true}
        //            headerColumns={[
        //                { columnName: "Name", columnStyle: "basis-20" },
        //                { columnName: "Details", columnStyle: "basis-20" },
        //                { columnName: "Upload Video", columnStyle: "basis-20" },
        //                { columnName: "Upload Picture", columnStyle: "basis-20" },
        //                { columnName: "Upload Date", columnStyle: "basis-20" }
        //            ]}
        //        />
        //        <div>
        //        </div>
        //    </div>
        //)
    }
}
//# sourceMappingURL=Podcast.js.map