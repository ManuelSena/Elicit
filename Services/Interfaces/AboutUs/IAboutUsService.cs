using ElicitPodcast.Models.Response.AboutUs;
using ElicitPodcast.Services.AboutUs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElicitPodcast.Services.AboutUs
{
    public interface IAboutUsService
    {
        List<AboutUs> ReadAll();
        //List<Podcast> ReadById(int id);
        int Post(AboutUsAddRequest model);
        int Put(AboutUsUpdateRequest model);
        int Delete(int id);
    }
}
