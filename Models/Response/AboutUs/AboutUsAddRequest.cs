using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ElicitPodcast.Models.Response.AboutUs
{
    public class AboutUsAddRequest
    {
        public string AboutUsSummary { get; set; }
        public string AboutUsPicture { get; set; }
        public string AboutName { get; set; }
        public string AboutTitle { get; set; }
        public string AboutNickname { get; set; }
        public string AboutBio { get; set; }
        public string AboutInstagram { get; set; }
        public string AboutFacebook { get; set; }
        public string AboutLinkedIn { get; set; }
        public string AboutEmailContact { get; set; }
    }
}