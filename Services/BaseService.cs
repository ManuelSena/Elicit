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
                    new SqlConnection("Server=localhost\\SQLEXPRESS;" + "Initial Catalog = Elicit;" + "Integrated Security = True;"));

            }
        }

    }
}