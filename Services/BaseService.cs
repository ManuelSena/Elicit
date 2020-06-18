using System.Data.SqlClient;
using Interfaces;
using EDbTools;
using System.Data;
using System;
using System.Collections.Generic;

namespace Services
{
    public class BaseService
    {
        public IDataProvider DataProvider { get; set; }
        public class EDbAdapter
        {
            public IDbConnection Conn { get; private set; }
            public IDbCommand Cmd { get; private set; }

            public EDbAdapter(IDbCommand command, IDbConnection conn)
            {
                Cmd = command;
                Conn = conn;
            }

            public List<T> LoadObject<T>(string storedProcedure,
                IDbDataParameter[] parameters = null) where T : class
            {
                List<T> list = new List<T>();
                using (IDbConnection conn = Conn)
                using (IDbCommand cmd = Cmd)
                {
                    if (conn.State != ConnectionState.Open)
                        conn.Open();

                    cmd.Connection = conn;
                    cmd.CommandTimeout = 5000;
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = storedProcedure;

                    if (parameters != null)
                    {
                        foreach (IDbDataParameter parameter in parameters)
                        {
                            cmd.Parameters.Add(parameter);
                        }
                    }

                    IDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        list.Add(DataMapper<T>.Instance.MapToObject(reader));
                    }
                }
                return list;
            }

            public int ExecuteQuery(string storedProcedure,
                IDbDataParameter[] parameters,
                Action<IDbDataParameter[]> returnParameters = null)
            {
                using (IDbConnection conn = Conn)
                using (IDbCommand cmd = Cmd)
                {
                    if (conn.State != ConnectionState.Open)
                        conn.Open();
                    cmd.Connection = conn;
                    cmd.CommandTimeout = 5000;
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = storedProcedure;
                    foreach (IDbDataParameter parameter in parameters)
                        cmd.Parameters.Add(parameter);
                    int returnValue = cmd.ExecuteNonQuery();

                    returnParameters?.Invoke(parameters);
                    return returnValue;
                }
            }


            public T ExecuteDbScalar<T>(string storedProcedure, IDbDataParameter[] parameters)
            {
                using (IDbConnection conn = Conn)
                using (IDbCommand cmd = Cmd)
                {
                    if (Conn.State != ConnectionState.Open)
                        conn.Open();
                    cmd.Connection = conn;
                    cmd.CommandTimeout = 5000;
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = storedProcedure;

                    foreach (IDbDataParameter parameter in parameters)
                        cmd.Parameters.Add(parameter);

                    object obj = cmd.ExecuteScalar();
                    return (T)obj;
                }
            }
        }

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