using EDbTools;
using ElicitPodcast.Models.Response.PrivatePolicy;
using ElicitPodcast.Services.PrivatePolicy;
using Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace ElicitPodcast.Services.PrivatePolicy
{
    public class PrivatePolicyService: BaseService, IPrivatePolicyService
    {
        public List<PrivatePolicyPage> ReadAll()
        {
            return Adapter.LoadObject<PrivatePolicyPage>("dbo.Private_Policy_Select_All");
        }

        //public PrivatePolicyPage ReadById(int id)
        //{
        //    return Adapter.LoadObject<PrivatePolicyPage>(
        //        "Private_Policy_SelectById",
        //        new[] { SqlDbParameter.Instance.BuildParameter("@Id", id, System.Data.SqlDbType.Int) }).FirstOrDefault();
        //}

        public int Post(PrivatePolicyAddRequest model)
        {

            int id = 0;
            Adapter.ExecuteQuery("Private_Policy_Insert",
                new[]
                {

                    SqlDbParameter.Instance.BuildParameter("@Id", 0, System.Data.SqlDbType.Int, 0, ParameterDirection.Output),
                    SqlDbParameter.Instance.BuildParameter("@privatePolicyName", model.PrivatePolicyName, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@privatePolicyDetails", model.PrivatePolicyDetails, SqlDbType.NVarChar),
                },
                (parameters =>
                {
                    id = parameters.GetParamValue<int>("@Id");
                }));
            return id;
        }

        public int Put(PrivatePolicyUpdateRequest model)
        {
            DataProvider.ExecuteNonQuery("dbo.Private_Policy_Update",
              inputParamMapper: delegate (SqlParameterCollection paramCollection)
              {
                  paramCollection.AddWithValue("@id", model.Id);
                  paramCollection.AddWithValue("@privatePolicyName", model.PrivatePolicyName);
                  paramCollection.AddWithValue("@privatePolicyDetails", model.PrivatePolicyDetails);
              });
            return 0;
        }

        public int Delete(int id)
        {
            Adapter.ExecuteQuery("Private_Policy_Delete",
                new[]
                {SqlDbParameter.Instance.BuildParameter("@Id", id, SqlDbType.Int)
                });
            return id;
        }
    }
}
