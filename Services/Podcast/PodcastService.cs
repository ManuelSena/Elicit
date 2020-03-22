using System.Collections.Generic;
using System.Linq;
using System.Data;

using ElicitDb.EDbTools;
using ElicitPodcast.Models.Response.Podcast;

namespace ElicitPodcast.Services.Podcast
{
    public class PodcastService : BaseService, IPodcastService   
    {
        public List<Podcast> ReadAll()
        {
            return Adapter.LoadObject<Podcast>("dbo.Elicit_Podcast_SelectAll");
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
                    SqlDbParameter.Instance.BuildParameter("@typeName", model.TypeName, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@details", model.Details, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@Id", 0, System.Data.SqlDbType.Int, 0, ParameterDirection.Output),
                },
                (parameters =>
                {
                    id = parameters.GetParamValue<int>("@Id");
                }));
            return id;
        }

        public int Put(PodcastUpdateRequest model)
        {
            int id = 0;
            Adapter.ExecuteQuery("Elicit_Podcast_Update",
                new[]
                {
                    SqlDbParameter.Instance.BuildParameter("@TypeName", model.TypeName, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@Details", model.Details, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@Id", model.Id, SqlDbType.Int),
                },
                (parameters =>
                {
                    id = parameters.GetParamValue<int>("@Id");
                }));
            return id;
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
