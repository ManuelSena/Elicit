using ElicitPodcast.Models.Response.Podcast;
using System.Collections.Generic;


namespace ElicitPodcast.Services.Podcast
{
    public interface IPodcastService
    {
        List<Podcast> ReadAll();
        //List<Podcast> ReadById(int id);
        int Post(PodcastAddRequest model);
        int Put(PodcastUpdateRequest model);
        int Delete(int id);
       
    }
}