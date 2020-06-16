import * as React from "react";
export const Button = (props) => {
    return (React.createElement("button", { style: { color: "black" }, type: "button", className: props.className, onClick: props.onClick }, props.label));
};
//# sourceMappingURL=button.js.map