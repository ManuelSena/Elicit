using System.ComponentModel.DataAnnotations;

namespace ElicitPodcast.Models.Response.Podcast
{
    public class PodcastUpdateRequest : PodcastAddRequest
    {
        [Required]
        public int Id { get; set; }
    }
}