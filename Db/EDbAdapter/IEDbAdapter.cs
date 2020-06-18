using System;
using System.Data;
using System.Data.SqlClient;

namespace EDbAdapter
{
    public interface IEDbProvider
    {
        void ExecuteCmd(
            string storedProc,
            Action<SqlParameterCollection> inputParamMapper,
            Action<IDataReader, short> singleRecordMapper,
            Action<SqlParameterCollection> returnParameters = null,
            Action<SqlCommand> cmdModifier = null);

        int ExecuteNonQuery(string storedProc,
            Action<System.Data.SqlClient.SqlParameterCollection> inputParamMapper,
            Action<System.Data.SqlClient.SqlParameterCollection> returnParamter = null);
    }
}
