using ElicitPodcast.Models.Response.Item;
using ElicitPodcast.Models.Response.Items;
using ElicitPodcast.Models.Response.Podcast;
using ElicitPodcast.Services.Interfaces.Podcast;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace ElicitPodcast.Controllers.Api.Podcast
{
       [RoutePrefix("api/podcasthost")]
        public class PodcastHostController : ApiController
        {

            IPodcastHostService _podcastHostService;

            public PodcastHostController(IPodcastHostService podcastHostService)
            {
            _podcastHostService = podcastHostService;
            }

            [Route(), HttpGet]
            public IHttpActionResult GetAll()
            {
                try
                {
                    return Ok(new ItemsResponse<ElicitPodcast.Services.Podcast.PodcastHost>
                    {
                        Items = _podcastHostService.ReadAll(),
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
            public IHttpActionResult Post(PodcastHostAddRequest model)
            {
                try
                {
                    ItemResponse<int> response = new ItemResponse<int>
                    {
                        Item = _podcastHostService.Post(model),
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
            public IHttpActionResult Put(PodcastHostUpdateRequest model)
            {
                try
                {
                    if (!ModelState.IsValid) { return BadRequest(ModelState); }
                    ItemResponse<int> response = new ItemResponse<int>
                    {
                        Item = _podcastHostService.Put(model)
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
            //[Route("{id:int}"), HttpDelete]
            //public IHttpActionResult Delete(int id)
            //{
            //    try
            //    {
            //        ItemResponse<int> response = new ItemResponse<int>
            //        {
            //            Item = _podcastService.Delete(id)
            //        };
            //        //
            //        return Ok(response);
            //    }
            //    catch (Exception ex)
            //    {
            //        return BadRequest(ex.Message);
            //    }
            //}
        //}
        }
}