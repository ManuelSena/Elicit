import * as React from "react";
import { Link } from "react-router";
import { FooterContainer } from "../Footer/FooterContainer";

export class Header extends React.Component<{}, {}>{

    constructor(props) {
        super(props);
        this.state = {};
    }

    //<div className="fixed-top" style={{ width: "100 % ", float: "left", padding: "30px 0", overflow: "hidden", backgroundColor: "#000000" }} >
    public render() {
        return (
            <React.Fragment>

                <div className="nav">
                    <div className="eheader">
                        <strong>
                            <a href="/home" className="glow pull-left">
                                Elicit</a>
                        </strong>
                    </div>

                    <div className="mainListDiv">
                        <Link to="/home" className="btn">Home</Link>
                        <Link to="/podcast" className="btn ">Podcast</Link>
                        <Link to="/about" className="btn ">About</Link>
                        <Link to="/rss" className="btn">RSS Feed</Link>
                        <Link to="/contactus" className="btn">Contact Us</Link>
                    </div>
                </div>

                <FooterContainer />

            </React.Fragment>
        );
    }
}