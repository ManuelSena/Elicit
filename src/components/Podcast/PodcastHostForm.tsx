import * as React from "react"
import { Button } from "../../common/components/form/button";
import { IPodcastHostPage } from "../Interfaces/Podcast/IPodcastHostPage";

interface IPodcastHostIndexSingle {
    podcastHost: IPodcastHostPage[];
}

export const PodcastHostForm: React.StatelessComponent<IPodcastHostIndexSingle> = (props: IPodcastHostIndexSingle) => {
    return (
        <div className="container">
            <h1> MEET THE TEAM </h1>
            {props.podcastHost.map(function (podcastHost, i) {
                if (podcastHost.id > 1) {
                    return (
                        <div className="meetthesegents" key={i}>
                            <img src={podcastHost.podcastHostPicture} style={{ height: 200, width: 100 }} />
                            <h2>{podcastHost.podcastHostName}</h2>
                            <h3>{podcastHost.podcastHostNickname}</h3>
                            <a href="mailto: {podcastHost.PodcastHostEmailContact}">{podcastHost.podcastHostEmailContact}</a>
                            <p>{podcastHost.podcastHostBio}</p>
                            <div className="social-media">
                                <a className="fa fa-instagram" target="_blank" href={podcastHost.podcastHostInstagram}></a>
                                <a className="fa fa-facebook" target="_blank" href={podcastHost.podcastHostFacebook}></a>
                                <a className="fa fa-linkedin" target="_blank" href={podcastHost.podcastHostLinkedIn}></a>
                            </div>
                        </div>

                    )
                }
            })}
        </div>
    )
}