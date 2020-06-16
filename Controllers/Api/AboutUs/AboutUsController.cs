using ElicitPodcast.Models.Response.AboutUs;
using ElicitPodcast.Models.Response.Item;
using ElicitPodcast.Models.Response.Items;
using ElicitPodcast.Models.Response.Podcast;
using ElicitPodcast.Services.AboutUs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace ElicitPodcast.Controllers.Api.AboutUs
{
    [RoutePrefix("api/aboutus")]
    public class AboutUsController : ApiController
    {
        IAboutUsService _aboutUsService;

        public AboutUsController(IAboutUsService aboutUsService)
        {
            _aboutUsService = aboutUsService;
        }

        [Route(), HttpGet]
        public IHttpActionResult GetAll()
        {
            try
            {
                return Ok(new ItemsResponse<ElicitPodcast.Services.AboutUs.AboutUs>
                {
                    Items = _aboutUsService.ReadAll(),
                    IsSuccessful = true
                });
            }
            catch (Exception ex)
            {
                {
                    return BadRequest(ex.Message);
                };
            }
        }
        //***************************************** POST *****************************************
        [Route(), HttpPost]
        public IHttpActionResult Post(AboutUsAddRequest model)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _aboutUsService.Post(model),
                    IsSuccessful = true
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        //******************************************** PUT ****************************************

        [Route("{id:int}"), HttpPut]
        public IHttpActionResult Put(AboutUsUpdateRequest model)
        {
            try
            {
                if (!ModelState.IsValid) { return BadRequest(ModelState); }
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _aboutUsService.Put(model)
                };
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        ////******************************************** GET BY ID ****************************************

        //[Route("{id:int}"), HttpGet]
        //public IHttpActionResult GetById(int id)
        //{
        //    try
        //    {
        //        ItemsResponse<Project> response = new ItemsResponse<Project>
        //        {
        //            Items = _projectService.ReadById(id)
        //        };
        //        return Ok(response);
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(ex.Message);
        //    }
        //}
        //******************************************** DELETE ****************************************
        [Route("{id:int}"), HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _aboutUsService.Delete(id)
                };
                //
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}