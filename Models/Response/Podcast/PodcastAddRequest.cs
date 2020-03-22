using System.ComponentModel.DataAnnotations;

namespace ElicitPodcast.Models.Response.Podcast
{
    public class PodcastAddRequest
    {
        [Required]
        public string TypeName { get; set; }
        [Required]
        public string Details { get; set; }

    }
}