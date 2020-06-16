using ElicitPodcast.Models.Response.ContactUs;
using ElicitPodcast.Services.Email;
using ElicitPodcast.Services.Interfaces.ContactUs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace ElicitPodcast.Controllers.Api.ContactUs
{
        [AllowAnonymous]
        [RoutePrefix("api/contactUs")]
        public class ContactUsController : ApiController
        {
            IGmailService _gmailService;

            public ContactUsController(IGmailService gmailService)
            {
                _gmailService = gmailService;
            }

        [Route(), HttpPost]
            public IHttpActionResult SendContactUs(ContactUsRequest model)
            {
                try
                {
                    _gmailService.SendSingleEmail(new GmailContentData
                    {
                        To = new EmailUserData { Email = "manny@elicit.us", Name = "Manny Sena" },
                        Subject = model.Topic,
                        Body = "From: "+ model.Email + model.Message
                    });
                return Ok();
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }


            }
        }
}