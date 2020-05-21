using AbidzarFrm.Modules.Common.Abstraction;
using AbidzarFrm.Modules.Common.Helpers;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace AbidzarFrm.Modules.Common.Interface
{
    public interface ITransaction
    {
        AccessButtonResponse GetTransactionAccessButton(IDbConnection connection, AccessButtonRequest request);
        NextStatusResponse GetNextStatus(IDbConnection connection, NextStatusRequest request);
        ResultStatusResponse UpdateNextStatus(IDbConnection connection, NextStatusRequest request);
        ResultStatusResponse SendEmail(IDbConnection connection, NextStatusRequest request);
    }
}