import { IPodcastList } from "../../components/Podcast/Podcast";

export interface IPodcastListForm {
    podcastList: IPodcastList;
    onChange: (fieldName: string, value: any) => void;
    onSubmit: () => void;
}