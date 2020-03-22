import * as React from "react";
import { IPodcastList } from "../Podcast/Podcast";
import { Input, Button, Textarea } from "../../common/components/form/index";


interface IPodcastListForm {
    podcastList: IPodcastList;
    onChange: (fieldName: string, value: string) => void;
    onSubmit: () => void;
    onUpdate: () => void;

}


export const PodcastForm: React.StatelessComponent<IPodcastListForm> = (props: IPodcastListForm) => {
    return (
        <div className="an-single-component">
            <div className="an-formarea">
                <div className="an-component-header grey-bg">
                    <h1>Welcome</h1>
                </div>
                <div className="an-component-body">
                    <div className="an-helper-block">
                        <form>
                            <fieldset>

                                <div className="form-group">
                                    <Input
                                        label="Name"
                                        name="typeName"
                                        value={props.podcastList.typeName}
                                        placeholder="Enter Name"
                                        onChange={props.onChange} />
                                </div>

                                <div className="form-group">
                                    <Textarea
                                        label="Details"
                                        name="details"
                                        value={props.podcastList.details}
                                        placeholder="Enter Your Details"
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