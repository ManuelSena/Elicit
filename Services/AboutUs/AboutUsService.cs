using EDbTools;
using ElicitPodcast.Models.Response.AboutUs;
using Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace ElicitPodcast.Services.AboutUs
{
    public class AboutUsService : BaseService, IAboutUsService
    {
            public List<AboutUs> ReadAll()
            {
                return Adapter.LoadObject<AboutUs>("dbo.About_Us_Select_All");
            }

            //public AboutUsPage ReadById(int id)
            //{
            //    return Adapter.LoadObject<AboutUsPage>(
            //        "About_Us_SelectById",
            //        new[] { SqlDbParameter.Instance.BuildParameter("@Id", id, System.Data.SqlDbType.Int) }).FirstOrDefault();
            //}

            public int Post(AboutUsAddRequest model)
            {

                int id = 0;
                Adapter.ExecuteQuery("About_Us_Insert",
                    new[]
                    {

                    SqlDbParameter.Instance.BuildParameter("@Id", 0, System.Data.SqlDbType.Int, 0, ParameterDirection.Output),
                    SqlDbParameter.Instance.BuildParameter("@aboutUsSummary", model.AboutUsSummary, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@aboutUsPicture", model.AboutUsPicture, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@aboutName", model.AboutName, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@aboutTitle", model.AboutTitle, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@aboutNickname", model.AboutNickname, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@aboutBio", model.AboutBio, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@aboutInstagram", model.AboutInstagram, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@aboutFacebook", model.AboutFacebook, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@aboutLinkedIn", model.AboutLinkedIn, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@aboutEmailContact", model.AboutEmailContact, SqlDbType.NVarChar),
                    },
                    (parameters =>
                    {
                        id = parameters.GetParamValue<int>("@Id");
                    }));
                return id;
            }

            public int Put(AboutUsUpdateRequest model)
            {
                DataProvider.ExecuteNonQuery("dbo.About_Us_Update",
                  inputParamMapper: delegate (SqlParameterCollection paramCollection)
                  {
                      paramCollection.AddWithValue("@id", model.Id);
                      paramCollection.AddWithValue("@aboutUsSummary", model.AboutUsSummary);
                      paramCollection.AddWithValue("@aboutUsPicture", model.AboutUsPicture);
                      paramCollection.AddWithValue("@aboutName", model.AboutName);
                      paramCollection.AddWithValue("@aboutTitle", model.AboutTitle);
                      paramCollection.AddWithValue("@aboutNickname", model.AboutNickname);
                      paramCollection.AddWithValue("@aboutBio", model.AboutBio);
                      paramCollection.AddWithValue("@aboutInstagram", model.AboutInstagram);
                      paramCollection.AddWithValue("@aboutFacebook", model.AboutFacebook);
                      paramCollection.AddWithValue("@aboutLinkedIn", model.AboutLinkedIn);
                      paramCollection.AddWithValue("@aboutEmailContact", model.AboutEmailContact);
                  });
                return 0;
            }

            public int Delete(int id)
            {
                Adapter.ExecuteQuery("About_Us_Delete",
                    new[]
                    {SqlDbParameter.Instance.BuildParameter("@Id", id, SqlDbType.Int)
                    });
                return id;
            }
    }
}
