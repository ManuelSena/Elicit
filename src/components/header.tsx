import * as React from "react";
import { Link } from "react-router";

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <div>
            <Link to="/home" className="btn btn-primary">Home</Link>
            <Link to="/podcast" className="btn btn-warning">Podcast</Link>
            <Link to="/about" className="btn btn-primary">About</Link>
 
        </div>
    );
}