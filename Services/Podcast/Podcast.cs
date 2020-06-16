using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ElicitPodcast.Services.Podcast
{
    public class Podcast
    {
        public int Id { get; set; }
        public string PodcastName { get; set; }
        public string PodcastDetails { get; set; }
        public DateTime PodcastUploadDate { get; set; }
        public string PodcastVideoUpload { get; set; }
        public string PodcastPictureUpload { get; set; }
    }
}