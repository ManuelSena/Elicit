import * as React from "react"; 
import { PrivatePolicy } from "../PrivatePolicy/PrivatePolicy";

export class FooterContainer extends React.Component<{}> {
    public render() {
        return (
            <div className="fixed-bottom">
                <footer>
                    <div className="ep-footerbar">
                        <span className="ep-copyright" style={{color:"white"}}>Elicit ©2020  |  All Rights Reserved</span>
                        <nav className="footer-nav pull-right">
                                <ul>
                                    <li><PrivatePolicy /></li>
                                </ul>
                            </nav>
                    </div>
                </footer>
            </div>
        )
    }
}