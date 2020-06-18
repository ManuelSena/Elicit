using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EDbTools;

namespace EDbAdapter
{
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
}
