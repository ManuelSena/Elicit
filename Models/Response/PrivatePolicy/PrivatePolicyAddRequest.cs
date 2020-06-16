using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ElicitPodcast.Models.Response.PrivatePolicy
{
    public class PrivatePolicyAddRequest
    {
        public string PrivatePolicyName { get; set; }
        public string PrivatePolicyDetails { get; set; }
    }
}