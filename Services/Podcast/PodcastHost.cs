using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ElicitPodcast.Services.Podcast
{
    public class PodcastHost
    {
        public int Id { get; set; }
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