import * as React from "react";
import { Button } from "../../common/components/form/button";
import { IPrivatePolicy } from "../../interfaces/PrivatePolicy/IPrivatePolicy";
import { PrivatePolicyApi } from "../../api/PrivatePolicy/PrivatePolicyApi";
import { PrivatePolicyModal } from "./PrivatePolicyModal";
import { PrivatePolicyList } from "./PrivatePolicyList";

//"Blueprint" or interface for our Modal State
interface IPublicPrivacyModalWindowState {
    privatePoliciesDisplayItems: IPrivatePolicy[];
    showModal: boolean;
}

export class PrivatePolicy extends React.Component<{}, IPublicPrivacyModalWindowState> {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            privatePoliciesDisplayItems: []
        };
        this.modalToggle = this.modalToggle.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    public componentDidMount() {
        this.loadDataList();
    }

    private modalToggle() {
        this.setState({ showModal: !this.state.showModal })
    }

    private onClose() {
        this.setState({ showModal: !this.state.showModal })
    }
    private loadDataList() {
        PrivatePolicyApi.getPrivatePolicyList()
            .then((response) => {
                this.setState({ privatePoliciesDisplayItems: response.items });
                console.log(response)
            })
            .catch((err) => { console.log("error!", err); })
    }


  

    public render() {
        return (
            <div >
                <button onClick={this.modalToggle} className="privacy">Privacy</button>
                <PrivatePolicyModal
                    showModal={this.state.showModal}
                    onClose={this.onClose}>
                    <PrivatePolicyList
                        dataItems={this.state.privatePoliciesDisplayItems}
                        onButtonClick={this.loadDataList}
                    />
                </PrivatePolicyModal>
            </div>
        )
    }
}
