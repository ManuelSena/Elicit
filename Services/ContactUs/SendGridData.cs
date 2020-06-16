using ElicitPodcast.Services.Email;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ElicitPodcast.Services.ContactUs
{
    public class SendGridData : EmailContentData
    {
        public List<EmailUserData> FromList { get; set; }
        public string PlainTextContent { get; set; }
        public string HtmlContent { get; set; }
    }
}