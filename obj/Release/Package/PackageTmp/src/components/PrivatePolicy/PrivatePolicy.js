import * as React from "react";
import { PrivatePolicyApi } from "../../api/PrivatePolicy/PrivatePolicyApi";
import { PrivatePolicyModal } from "./PrivatePolicyModal";
import { PrivatePolicyList } from "./PrivatePolicyList";
export class PrivatePolicy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            privatePoliciesDisplayItems: []
        };
        this.modalToggle = this.modalToggle.bind(this);
        this.onClose = this.onClose.bind(this);
    }
    componentDidMount() {
        this.loadDataList();
    }
    modalToggle() {
        this.setState({ showModal: !this.state.showModal });
    }
    onClose() {
        this.setState({ showModal: !this.state.showModal });
    }
    loadDataList() {
        PrivatePolicyApi.getPrivatePolicyList()
            .then((response) => {
            this.setState({ privatePoliciesDisplayItems: response.items });
            console.log(response);
        })
            .catch((err) => { console.log("error!", err); });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("button", { onClick: this.modalToggle, className: "privacy" }, "Privacy"),
            React.createElement(PrivatePolicyModal, { showModal: this.state.showModal, onClose: this.onClose },
                React.createElement(PrivatePolicyList, { dataItems: this.state.privatePoliciesDisplayItems, onButtonClick: this.loadDataList }))));
    }
}
//# sourceMappingURL=PrivatePolicy.js.map