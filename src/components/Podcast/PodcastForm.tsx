import * as React from "react";
import { IPodcastList } from "../../Components/Interfaces/index";
import { Input, Button, Textarea } from "../../common/components/form/index";


interface IPodcastListForm {
    podcastList: IPodcastList;
    onChange: (fieldName: string, value: string) => void;
    onSubmit: () => void;
    onUpdate: () => void;

}


export const PodcastForm: React.StatelessComponent<IPodcastListForm> = (props: IPodcastListForm) => {
    return (
        <div className="an-single-component" style={{ color: "white" }}>
            <div className="an-formarea">
                <div className="an-component-header grey-bg">
                    <h1>Podcasts</h1>
                </div>
                <div className="an-component-body">
                    <div className="an-helper-block">
                        <form>
                            <fieldset>

                                <div className="form-group">
                                    <Input
                                        label="Name"
                                        name="podcastName"
                                        value={props.podcastList.podcastName}
                                        placeholder="Enter Name"
                                        onChange={props.onChange} />
                                </div>

                                <div className="form-group">
                                    <Textarea
                                        label="Details"
                                        name="podcastDetails"
                                        value={props.podcastList.podcastDetails}
                                        placeholder="Enter Your Details"
                                        onChange={props.onChange} />
                                </div>
                                <div className="form-group">
                                    <Input
                                        label="Upload Video"
                                        name="podcastVideoUpload"
                                        value={props.podcastList.podcastVideoUpload}
                                        placeholder="Upload Video"
                                        onChange={props.onChange} />
                                </div>
                                <div className="form-group">
                                    <Input
                                        label="Upload Picture"
                                        name="podcastPictureUpload"
                                        value={props.podcastList.podcastPictureUpload}
                                        placeholder="Upload Picture"
                                        onChange={props.onChange} />
                                </div>

                                <Button className="an-btn an-btn-primary" 
                                    label="Submit"
                                    onClick={props.onSubmit}
                                />


                                <Button className="an-btn an-btn-primary"
                                    label="Update"
                                    onClick={props.onUpdate}
                                />

                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}