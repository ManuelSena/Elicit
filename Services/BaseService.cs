using System.Data.SqlClient;
using ElicitDb.EDbAdapter;
using ElicitDb.Interfaces;

namespace ElicitPodcast.Services
{
    public class BaseService
    {
        public IDataProvider DataProvider { get; set; }

        public EDbAdapter Adapter
        {
            get
            {
           
                return new EDbAdapter(new SqlCommand(),
                    new SqlConnection("Data Source = elicitapp.cxtivv0uiqhh.us-west-1.rds.amazonaws.com; Initial Catalog = ElicitWeb; Persist Security Info = True; User ID = masterd; Password = joker13ms3"));
                // Data Source = elicitapp.cxtivv0uiqhh.us - west - 1.rds.amazonaws.com; Initial Catalog = ElicitWeb; Persist Security Info = True; User ID = masterd; Password = joker13ms3
                // Server = elicitapp.cxtivv0uiqhh.us-west-1.rds.amazonaws.com,1433; Database = ElicitWeb; User Id = masterd; Password = 
                // Server=localhost\\SQLEXPRESS;" + "Initial Catalog = Elicit;" + "Integrated Security = True;
            }
        }

    }
}