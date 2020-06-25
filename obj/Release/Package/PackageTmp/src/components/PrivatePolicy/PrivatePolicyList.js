import * as React from "react";
export const PrivatePolicyList = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "row" }, props.headerColumns != null ? (props.headerColumns.map((itm, i) => {
            return React.createElement("div", { key: i, className: itm.columnStyle },
                React.createElement("strong", null, itm.columnName));
        }))
            : ("")),
        props.dataItems.map(buildRow(props))));
};
const buildRow = (props) => (itm, ndx) => {
    return (React.createElement("div", { className: "row", key: ndx },
        React.createElement("br", null),
        React.createElement("div", { className: "col-md-12" },
            React.createElement("u", null,
                React.createElement("strong", null,
                    itm.privatePolicyName,
                    ": "))),
        React.createElement("br", null),
        React.createElement("div", { className: "col-md-12" }, itm.privatePolicyDetails),
        React.createElement("br", null)));
};
const buttonClick = (props, id, action) => (e) => {
    props.onButtonClick(id, action);
};
//# sourceMappingURL=PrivatePolicyList.js.map