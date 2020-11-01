using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ElicitPodcast.Models.Response.Podcast
{
    public class PodcastHostAddRequest
    {
        public string PodcastHostPicture { get; set; }
        public string PodcastHostName { get; set; }
        public string PodcastHostTitle { get; set; }
        public string PodcastHostNickname { get; set; }
        public string PodcastHostFavoriteBands { get; set; }
        public string PodcastHostBio { get; set; }
        public string PodcastHostInstagram { get; set; }
        public string PodcastHostFacebook { get; set; }
        public string PodcastHostLinkedIn { get; set; }
        public string PodcastHostEmailContact { get; set; }
        public int DisplayOrder { get; set; }
    }
}