using EDbTools;
using ElicitPodcast.Models.Response.Podcast;
using ElicitPodcast.Services.Interfaces.Podcast;
using Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace ElicitPodcast.Services.Podcast
{
    public class PodcastHostService : BaseService, IPodcastHostService
    {
        public List<PodcastHost> ReadAll()
        {
            return Adapter.LoadObject<PodcastHost>("dbo.Podcast_Host_Select_All");
        }

        //public Podcast ReadById(int id)
        //{
        //    return Adapter.LoadObject<Podcast>(
        //        "Elicit_Podcast_SelectById",
        //        new[] { SqlDbParameter.Instance.BuildParameter("@Id", id, System.Data.SqlDbType.Int) }).FirstOrDefault();
        //}

        public int Post(PodcastHostAddRequest model)
        {

            int id = 0;
            Adapter.ExecuteQuery("Podcast_Host_Insert",
                new[]
                {
                    SqlDbParameter.Instance.BuildParameter("@Id", 0, System.Data.SqlDbType.Int, 0, ParameterDirection.Output),
                    SqlDbParameter.Instance.BuildParameter("@PodcastHostPicture", model.PodcastHostPicture, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@PodcastHostName", model.PodcastHostName, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@PodcastHostTitle", model.PodcastHostTitle, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@PodcastHostNickname", model.PodcastHostNickname, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@PodcastHostFavoriteBands", model.PodcastHostFavoriteBands, SqlDbType.NVarChar),
                     SqlDbParameter.Instance.BuildParameter("@PodcastHostBio", model.PodcastHostBio, SqlDbType.NVarChar),
                      SqlDbParameter.Instance.BuildParameter("@PodcastHostInstagram", model.PodcastHostInstagram, SqlDbType.NVarChar),
                       SqlDbParameter.Instance.BuildParameter("@PodcastHostFacebook", model.PodcastHostFacebook, SqlDbType.NVarChar),
                        SqlDbParameter.Instance.BuildParameter("@PodcastHostLinkedIn", model.PodcastHostLinkedIn, SqlDbType.NVarChar),
                        SqlDbParameter.Instance.BuildParameter("@PodcastHostEmailContact", model.PodcastHostEmailContact, SqlDbType.NVarChar),
                        SqlDbParameter.Instance.BuildParameter("@DisplayOrder", model.DisplayOrder, SqlDbType.NVarChar)
                },
                (parameters =>
                {
                    id = parameters.GetParamValue<int>("@Id");
                }));
            return id;
        }

        public int Put(PodcastHostUpdateRequest model)
        {
            DataProvider.ExecuteNonQuery("dbo.Podcast_Host_Update",
              inputParamMapper: delegate (SqlParameterCollection paramCollection)
              {
                  paramCollection.AddWithValue("@Id", model.Id);
                  paramCollection.AddWithValue("@PodcastHostPicture", model.PodcastHostPicture);
                  paramCollection.AddWithValue("@PodcastHostName", model.PodcastHostName);
                  paramCollection.AddWithValue("@PodcastHostTitle", model.PodcastHostTitle);
                  paramCollection.AddWithValue("@PodcastHostNickname", model.PodcastHostNickname);
                  paramCollection.AddWithValue("@PodcastHostFavoriteBands", model.PodcastHostFavoriteBands);
                  paramCollection.AddWithValue("@PodcastHostBio", model.PodcastHostBio);
                  paramCollection.AddWithValue("@PodcastHostInstagram", model.PodcastHostInstagram);
                  paramCollection.AddWithValue("@PodcastHostFacebook", model.PodcastHostFacebook);
                  paramCollection.AddWithValue("@PodcastHostLinkedIn", model.PodcastHostLinkedIn);
                  paramCollection.AddWithValue("@PodcastHostEmailContact", model.PodcastHostEmailContact);
                  paramCollection.AddWithValue("@DisplayOrder", model.DisplayOrder);
              });
            return 0;
            //int id = 0;
            //Adapter.ExecuteQuery("Elicit_Podcast_Update",
            //    new[]
            //    {
            //        SqlDbParameter.Instance.BuildParameter("@podcastName", model.PodcastName, SqlDbType.NVarChar),
            //        SqlDbParameter.Instance.BuildParameter("@podcastDetails", model.PodcastDetails, SqlDbType.NVarChar),
            //        SqlDbParameter.Instance.BuildParameter("@Id", 0, System.Data.SqlDbType.Int, 0, ParameterDirection.Output),
            //        //SqlDbParameter.Instance.BuildParameter("@podcastUploadDate", model.PodcastUploadDate, SqlDbType.DateTime),
            //        SqlDbParameter.Instance.BuildParameter("@podcastVideoUpload", model.PodcastVideoUpload, SqlDbType.NVarChar),
            //        SqlDbParameter.Instance.BuildParameter("@podcastPictureUpload", model.PodcastPictureUpload, SqlDbType.NVarChar)

            //    },
            //    (parameters =>
            //    {
            //        id = parameters.GetParamValue<int>("@Id");
            //    }));
            //return id;
        }

        //public int Delete(int id)
        //{
        //    Adapter.ExecuteQuery("Podcast_Host_Delete",
        //        new[]
        //        {SqlDbParameter.Instance.BuildParameter("@Id", id, SqlDbType.Int)
        //        });
        //    return id;
        //}
    }
}
