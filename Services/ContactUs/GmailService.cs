using ElicitPodcast.Services.Email;
using ElicitPodcast.Services.Interfaces.ContactUs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Web;

namespace ElicitPodcast.Services.ContactUs
{
    public class GmailService : IGmailService
    {
        public GmailService() { }

        public void SendSingleEmail(GmailContentData model)
        {
            string senderEmail = System.Configuration.ConfigurationManager.AppSettings["senderEmail"].ToString();
            string senderPassword = System.Configuration.ConfigurationManager.AppSettings["senderPassword"].ToString();
            try
            {
                SmtpClient smtp = new SmtpClient
                {
                    Host = "smtp.gmail.com",
                    Port = 587,
                    EnableSsl = true,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = false,
                    Credentials = new NetworkCredential(senderEmail, senderPassword),
                    Timeout = 3000
                };
                MailMessage message = new MailMessage(senderEmail, model.To.Email, model.Subject, model.Body);
                message.IsBodyHtml = true;
                message.BodyEncoding = UTF8Encoding.UTF8;
                smtp.Send(message);
             
            }
            catch
            {
            }
        }

        

    }
}