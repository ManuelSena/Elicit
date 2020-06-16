using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ElicitPodcast.Services.Email
{
    public class EmailContentData
    {
        public EmailUserData From { get; set; }
        public EmailUserData To { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
    }
}