using System;
using System.ComponentModel.DataAnnotations;

namespace ElicitPodcast.Models.Response.Podcast
{
    public class PodcastAddRequest
    {
        [Required]
        public string PodcastName { get; set; }
        public string PodcastDetails { get; set; }
        public DateTime PodcastUploadDate { get; set; }
        public string PodcastVideoUpload { get; set; }
        public string PodcastPictureUpload { get; set; }

    }
}