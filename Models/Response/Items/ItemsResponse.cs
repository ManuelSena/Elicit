using ElicitPodcast.Models.Response.Success;
using System.Collections.Generic;


namespace ElicitPodcast.Models.Response.Items
{
    public class ItemsResponse<T> : SuccessResponse
    {
        public List<T> Items { get; set; }
    }
}