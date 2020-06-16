import * as React from "react";
export class PrivatePolicyModal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.showModal)
            return null;
        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50,
            zIndex: 999,
            overflow: 'auto'
        };
        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            maxHeight: 500,
            margin: '0 auto',
            padding: 30,
            zIndex: 1001
        };
        const modalBody = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            maxHeight: 200,
            margin: '0 auto',
            padding: 20,
            zIndex: 1001,
            /*scrollbar*/ overflowY: "scroll"
        };
        return (React.createElement("div", { className: "backdrop", style: backdropStyle },
            React.createElement("div", { style: modalStyle },
                React.createElement("h1", null,
                    React.createElement("strong", null, "Private Policies: ")),
                React.createElement("hr", null),
                React.createElement("br", null),
                React.createElement("div", { style: modalBody }, this.props.children),
                React.createElement("div", { className: "footer" },
                    React.createElement("br", null),
                    React.createElement("hr", null),
                    React.createElement("button", { className: "btn btn-danger", onClick: this.props.onClose }, "Close")))));
    }
}
//# sourceMappingURL=PrivatePolicyModal.js.map