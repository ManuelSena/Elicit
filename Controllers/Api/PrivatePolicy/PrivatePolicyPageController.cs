using ElicitPodcast.Models.Response.Item;
using ElicitPodcast.Models.Response.Items;
using ElicitPodcast.Models.Response.PrivatePolicy;
using ElicitPodcast.Services.PrivatePolicy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace ElicitPodcast.Controllers.Api.PrivatePolicy
{
    [RoutePrefix("api/privatepolicy")]
    public class PrivatePolicyPageController : ApiController
    {
        IPrivatePolicyService _privatePolicyService;

        public PrivatePolicyPageController(IPrivatePolicyService privatePolicyService)
        {
            _privatePolicyService = privatePolicyService;
        }

        [Route(), HttpGet]
        public IHttpActionResult GetAll()
        {
            try
            {
                return Ok(new ItemsResponse<PrivatePolicyPage>
                {
                    Items = _privatePolicyService.ReadAll(),
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
        public IHttpActionResult Post(PrivatePolicyAddRequest model)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _privatePolicyService.Post(model),
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
        public IHttpActionResult Put(PrivatePolicyUpdateRequest model)
        {
            try
            {
                if (!ModelState.IsValid) { return BadRequest(ModelState); }
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _privatePolicyService.Put(model)
                };
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //******************************************** GET BY ID ****************************************

        //[Route("{id:int}"), HttpGet]
        //public IHttpActionResult GetById(int id)
        //{
        //    try
        //    {
        //        ItemsResponse<PrivatePolicyPage> response = new ItemsResponse<PrivatePolicyPage>
        //        {
        //            Items = _privatePolicyPageService.ReadById(id)
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
                    Item = _privatePolicyService.Delete(id)
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