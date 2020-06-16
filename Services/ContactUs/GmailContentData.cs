using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ElicitPodcast.Services.Email
{
    public class GmailContentData : EmailContentData
    {
        public string GmailFrom { get; set; }
        public string[] EmailToCollection { get; set; }
    }
}