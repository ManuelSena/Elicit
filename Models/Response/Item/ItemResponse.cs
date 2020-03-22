namespace ElicitPodcast.Models.Response.Item
{
    public class ItemResponse<T> : BaseResponse
    {
        public T Item { get; set; }
    }
}