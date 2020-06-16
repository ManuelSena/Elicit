import * as React from "react";

export interface IPrivatePolicyModal {
    showModal: boolean;
    onClose: () => void;
}

export class PrivatePolicyModal extends React.Component<IPrivatePolicyModal, {}>{
    constructor(props: IPrivatePolicyModal) {
        super(props);
    }

    public render() {
        if (!this.props.showModal)
            return null;
        const backdropStyle: React.CSSProperties = {
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
        const modalStyle: React.CSSProperties = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            maxHeight: 500,
            margin: '0 auto',
            padding: 30,
            zIndex: 1001
        };
        const modalBody: React.CSSProperties = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            maxHeight: 200,
            margin: '0 auto',
            padding: 20,
            zIndex: 1001,
/*scrollbar*/overflowY: "scroll" 
        }


        return (
            <div className="backdrop" style={backdropStyle}>
                <div style={modalStyle}>
                    <h1><strong>Private Policies: </strong></h1>
                    <hr />
                    <br />
                    <div style={modalBody}>
                        {this.props.children}
                    </div>
                    <div className="footer">
                        <br />
                        <hr />
                        <button className="btn btn-danger" onClick={this.props.onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}