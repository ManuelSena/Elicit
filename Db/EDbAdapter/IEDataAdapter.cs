using System;
using System.Collections.Generic;
using System.Data;

namespace EDbAdapter
{
    interface IEDataAdapter
    {
        IDbCommand Cmd { get; }
        IDbConnection Conn { get; }

        T ExecuteDbScalar<T>(string storedProcedure, IDbDataParameter[] parameters);
        int ExecuteQuery(string storedProcedure, IDbDataParameter[] parameters, Action<IDbDataParameter[]> returnParameters = null);
        List<T> LoadObject<T>(string storedProcedure, IDbDataParameter[] parameters = null) where T : class;
    }
}
