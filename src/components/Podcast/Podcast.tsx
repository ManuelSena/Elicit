import * as React from "react";
import { getPodcastList, postPodcastList, updatePodcastList, deletePodcastList } from "../../../src/api/podcast/PodcastApi";
import { PodcastForm, PodcastList } from "./index";
import { GrayBanner } from "../Banners/GreyBanner";
import { FooterContainer } from "../Footer/FooterContainer";
import { IPodcastList } from "../../Components/Interfaces/index";
import { DropDownList } from "../../common/components/form/dropdownlist";

export interface IPodcastListState {
    podcastList: IPodcastList;
    podcastListItems: IPodcastList[];
}

export class Podcast extends React.Component<{}, IPodcastListState>{
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

        }
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

    private onFieldChange(fieldName: string, fieldValue: string) {
        const nextState = {
            ...this.state,
            podcastList: {
                ...this.state.podcastList,
                [fieldName]: fieldValue
            }
        }
        this.setState(nextState);
    }

    private listButtonClick(id: number, action: string) {
        let ndx = this.state.podcastListItems.findIndex(x => x.id === id);

        if (action === "edit") {
            if (ndx >= 0) {
                this.setState({ podcastList: this.state.podcastListItems[ndx] });
            }
        }

        else if (action === "delete") {
            this.state.podcastListItems.splice(ndx, 1)
            let itms = [
                ...this.state.podcastListItems
            ];
            this.onDeleteClick(id);
            this.loadDataList();
        }
    }

    private clearStateAndForm() {
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

    private onSubmit() {
        postPodcastList(this.state.podcastList)
            .then((response) => {
                console.log("POST")
                this.clearStateAndForm();
                this.loadDataList();
                console.log(response)
            }, (err) => {
            })
            .catch((err) => {
                console.log(err);
            });
    };

    private onUpdate() {
        updatePodcastList(this.state.podcastList)
            .then((response) => {
                console.log("PUT")
                this.clearStateAndForm();
                this.loadDataList();
            }, (err) => { }).catch((err) => {
                console.log(err);
            });
    }

    private onDeleteClick(id) {
        deletePodcastList(id)
            .then((response) => {
                this.loadDataList();
            }, (err) => { }).catch((err) => { });
    }

    private loadDataList() {
        getPodcastList()
            .then((response) => {
                this.setState({ podcastListItems: response.items });
                console.log(response)
            }, (err) => { }).catch((err) => { });
    }

    public componentDidMount() {
       

        this.loadDataList();
    }

    public render() {

        return (
            
            <div style="padding-top: 80px" className="podcast">
                <h2>Podcast</h2>
               
                <p>COMING SOON!</p>
            </div>
            )
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
