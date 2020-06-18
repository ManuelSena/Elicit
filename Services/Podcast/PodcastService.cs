using System.Collections.Generic;
using System.Linq;
using System.Data;
using EDbTools;
using ElicitPodcast.Models.Response.Podcast;
using System.Data.SqlClient;
using Services;

namespace ElicitPodcast.Services.Podcast
{
    public class PodcastService : BaseService, IPodcastService   
    {
        public List<Podcast> ReadAll()
        {
            return Adapter.LoadObject<Podcast>("dbo.Elicit_Podcast_Select_All");
        }

        public Podcast ReadById(int id)
        {
            return Adapter.LoadObject<Podcast>(
                "Elicit_Podcast_SelectById",
                new[] { SqlDbParameter.Instance.BuildParameter("@Id", id, System.Data.SqlDbType.Int) }).FirstOrDefault();
        }

        public int Post(PodcastAddRequest model)
        {
                      
            int id = 0;
            Adapter.ExecuteQuery("Elicit_Podcast_Insert",
                new[]
                {

                    SqlDbParameter.Instance.BuildParameter("@podcastName", model.PodcastName, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@podcastDetails", model.PodcastDetails, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@Id", 0, System.Data.SqlDbType.Int, 0, ParameterDirection.Output),
                    SqlDbParameter.Instance.BuildParameter("@podcastUploadDate", model.PodcastUploadDate, SqlDbType.DateTime2),
                    SqlDbParameter.Instance.BuildParameter("@podcastVideoUpload", model.PodcastVideoUpload, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@podcastPictureUpload", model.PodcastPictureUpload, SqlDbType.NVarChar)

                },
                (parameters =>
                {
                    id = parameters.GetParamValue<int>("@Id");
                }));
            return id;
        }

        public int Put(PodcastUpdateRequest model)
        {
            DataProvider.ExecuteNonQuery("dbo.Elicit_Podcast_Update",
              inputParamMapper: delegate (SqlParameterCollection paramCollection)
              {
                  paramCollection.AddWithValue("@id", model.Id);
                  paramCollection.AddWithValue("@podcastName", model.PodcastName);
                  paramCollection.AddWithValue("@podcastDetails", model.PodcastDetails);
                  paramCollection.AddWithValue("@podcastVideoUpload", model.PodcastVideoUpload);
                  paramCollection.AddWithValue("@podcastPictureUpload", model.PodcastPictureUpload);
                  paramCollection.AddWithValue("@podcastUploadDate", model.PodcastUploadDate);
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

        public int Delete(int id)
        {
            Adapter.ExecuteQuery("Elicit_Podcast_Delete",
                new[]
                {SqlDbParameter.Instance.BuildParameter("@Id", id, SqlDbType.Int)
                });
            return id;
        }
    }
}
