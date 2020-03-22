import * as React from "react";
import { IPodcastList } from "./Podcast";

export interface IPodcastListGridViewOptions<T> {
    dataItems: T[];
    showEditButton: boolean;
    showDeleteButton: boolean;
    onButtonClick: (id: number, action: string) => void;
    headerColumns?: IHeaderColumn[];
}

export interface IHeaderColumn {
    columnName: string;
    columnStyle: string;
}

export const PodcastList: React.StatelessComponent<IPodcastListGridViewOptions<IPodcastList>> = (props: IPodcastListGridViewOptions<IPodcastList>) => {
    return (
        <React.Fragment>

            <div className="an-single-component with-shadow">
                <div className="an-component-header">
                    <h2>List:</h2>
                </div>
                <div className="an-component-body">
                    <div className="an-helper-block">
                        <div className="scrollable">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        {props.headerColumns != null ? (
                                            props.headerColumns.map((itm, i) => {
                                                return <th key={i} className={itm.columnStyle}><strong>{itm.columnName}</strong></th>
                                            })
                                        )
                                            : ("")
                                        }
                                    </tr>
                                </thead>
                                {props.dataItems.map(buildRow(props))}
                            </table>
                        </div>
                    </div>
                    <div className="ps-scrollbar-y-rail">
                        <div className="ps-scrollbar-y"></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const buildRow = (props: IPodcastListGridViewOptions<IPodcastList>) => (itm: IPodcastList, ndx: number) => {
    return (
        <tbody key={ndx}>
            <tr>
                <td className="basis-20">{itm.typeName}</td>
                <td className="basis-20">{itm.details}</td>
                <td className="basis-10">
                    {props.showEditButton ? (<button type="button" className="an-btn an-btn-primary" onClick={buttonClick(props, itm.id, "edit")}>Edit</button>) : ("")}
                    {props.showDeleteButton ? (<button type="button" className="an-btn btn-danger" onClick={buttonClick(props, itm.id, "delete")}>Delete</button>) : ("")}
                </td>
            </tr>
        </tbody>
    );
}

const buttonClick = (props: IPodcastListGridViewOptions<IPodcastList>, id: number, action: string) => (e: React.SyntheticEvent<HTMLButtonElement>) => {
    props.onButtonClick(id, action);
};