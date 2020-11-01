using ElicitPodcast.Models.Response.Podcast;
using ElicitPodcast.Services.Podcast;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElicitPodcast.Services.Interfaces.Podcast
{
    public interface IPodcastHostService
    {
        List<PodcastHost> ReadAll();
        int Post(PodcastHostAddRequest model);
        int Put(PodcastHostUpdateRequest model);
    }
}
