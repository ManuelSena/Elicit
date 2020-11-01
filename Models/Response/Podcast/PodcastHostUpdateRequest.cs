using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ElicitPodcast.Models.Response.Podcast
{
    public class PodcastHostUpdateRequest : PodcastHostAddRequest
    {
        [Required]
        public int Id { get; set; }
    }
}