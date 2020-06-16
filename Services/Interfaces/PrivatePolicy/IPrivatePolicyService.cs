using ElicitPodcast.Models.Response.PrivatePolicy;
using ElicitPodcast.Services.PrivatePolicy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElicitPodcast.Services.PrivatePolicy
{
    public interface IPrivatePolicyService
    {
        List<PrivatePolicyPage> ReadAll();
        //List<PrivatePolicyPage> ReadById(int id);
        int Post(PrivatePolicyAddRequest model);
        int Put(PrivatePolicyUpdateRequest model);
        int Delete(int id);

    }
}