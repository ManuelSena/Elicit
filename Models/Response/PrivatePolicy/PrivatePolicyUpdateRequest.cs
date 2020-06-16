using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ElicitPodcast.Models.Response.PrivatePolicy
{
    public class PrivatePolicyUpdateRequest : PrivatePolicyAddRequest
    {
        [Required]
        public int Id { get; set; }

    }
}