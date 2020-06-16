using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ElicitPodcast.Models.Response.AboutUs
{
    public class AboutUsUpdateRequest : AboutUsAddRequest
    {
        [Required]
        public int Id { get; set; }
    }
}