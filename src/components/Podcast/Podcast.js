import * as React from "react";
import { getPodcastList, postPodcastList, updatePodcastList, deletePodcastList } from "../api/PodcastApi";
import { PodcastForm } from "./PodcastForm";
import { PodcastList } from "./PodcastList";
export class ElicitPodcast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            podcastList: {
                id: 0,
                typeName: "",
                details: ""
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
                typeName: "",
                details: ""
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
        }, (err) => { }).catch((err) => { });
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
        return (React.createElement("div", { className: "col-md-12" },
            React.createElement("div", { className: "an-profile-banner", style: {
                    background: "URL('')",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    width: "100%"
                } }),
            React.createElement("div", { className: "col-md-12" },
                React.createElement(PodcastForm, { podcastList: this.state.podcastList, onChange: this.onFieldChange, onSubmit: this.onSubmit, onUpdate: this.onUpdate }),
                React.createElement(PodcastList, { dataItems: this.state.podcastListItems, onButtonClick: this.listButtonClick, showDeleteButton: true, showEditButton: true, headerColumns: [
                        { columnName: "Name", columnStyle: "basis-20" },
                        { columnName: "Details", columnStyle: "basis-20" }
                    ] }))));
    }
}
//# sourceMappingURL=Podcast.js.map