import * as React from "react";
import { IPrivatePolicy, IGridView } from "../../interfaces/index";


export const PrivatePolicyList: React.StatelessComponent<IGridView<IPrivatePolicy>> = (props: IGridView<IPrivatePolicy>) => {
    return (
        <React.Fragment>
            <div className="row">
                {props.headerColumns != null ? (
                    props.headerColumns.map((itm, i) => {
                        return <div key={i} className={itm.columnStyle}><strong>{itm.columnName}</strong></div>
                    })
                )
                    : ("")
                }
            </div>
            {props.dataItems.map(buildRow(props))}
        </React.Fragment>
    )
}

const buildRow = (props: IGridView<IPrivatePolicy>) => (itm: IPrivatePolicy, ndx: number) => {
    return (<div className="row" key={ndx}>
        <br />
        <div className="col-md-12"><u><strong>{itm.privatePolicyName}: </strong></u></div>
        <br />
        <div className="col-md-12">{itm.privatePolicyDetails}</div>
        <br />
    </div>);
}

const buttonClick = (props: IGridView<IPrivatePolicy>, id: number, action: string) => (e: React.SyntheticEvent<HTMLButtonElement>) => {
    props.onButtonClick(id, action);
}