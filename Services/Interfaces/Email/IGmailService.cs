using ElicitPodcast.Services.Email;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElicitPodcast.Services.Interfaces.ContactUs
{
    public interface IGmailService
    {
            void SendSingleEmail(GmailContentData model);
    }
}
