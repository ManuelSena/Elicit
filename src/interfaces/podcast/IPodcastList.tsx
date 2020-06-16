
export interface IPodcastList {
    podcastList: IPodcastList;
    onChange: (fieldName: string, value: any) => void;
    onSubmit: () => void;
}