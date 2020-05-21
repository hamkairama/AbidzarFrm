using Serenity.Data;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using AbidzarFrm.Modules.Common.Helpers;
using AbidzarFrm.Rukuntangga.Entities;

namespace AbidzarFrm.Modules.Common.Abstraction
{
    public abstract class ATransaction : ServiceEndpoint
    {
        protected AccessButtonResponse ActionTransactionAccessButton(IDbConnection connection, AccessButtonRequest request)
        {
            AccessButtonResponse response = new AccessButtonResponse();

            var data = connection.Query<AccessButtonObj>
                (
                    "SP_GetTransactionAccessButton",
                    param: new { transactionId = request.TransactionId, documentCode = request.DocumentCode },
                    commandType: System.Data.CommandType.StoredProcedure
                );

            if (data != null)
            {
                response.ListAccessButtonRespose = (List<AccessButtonObj>)data.ToList();
            }

            return response;
        }
        protected NextStatusResponse ActionGetNextStatus(IDbConnection connection, NextStatusRequest request)
        {
            NextStatusResponse response = new NextStatusResponse();

            var data = connection.Query<NextStatusResponse>
                (
                    "SP_GetNextTransactionStatusCode",
                    param: new { transactionId = request.TransactionId, documentCode = request.DocumentCode, nextStatus = request.NextStatusCode },
                    commandType: System.Data.CommandType.StoredProcedure
                );

            if (data != null)
            {
                response = (NextStatusResponse)data.FirstOrDefault();
            }

            return response;
        }

        protected void ActionSendEmail(string subjectHeader, string content, NextStatusRequest request, string displayName = "")
        {
            EmailHelper.Send(subjectHeader, content, request.SendEmailTo, request.SendEmailCc, request.Attachments, displayName);
        }

        protected string GetSendEmailCc(NextStatusRequest request)
        {
            string result = "";
            var requestMyRow = (CommonRequestObj)request.Entity;
            using (var newConnUser = SqlConnections.NewFor<Administration.Entities.UserRow>())
            {
                if (request.CcCreator)
                {
                    var emailCreator = newConnUser.TrySingle<Administration.Entities.UserRow>(q => q.Select(Administration.Entities.UserRow.Fields.Email).Where(new Criteria(Administration.Entities.UserRow.Fields.UserId) == requestMyRow.InsertUserId.ToString()));
                    result = result + emailCreator.Email.ToString() + ";";
                }

                if (request.CcRequestor)
                {
                    var emailRequestor = newConnUser.TrySingle<Administration.Entities.UserRow>(q => q.Select(Administration.Entities.UserRow.Fields.Email).Where(new Criteria(Administration.Entities.UserRow.Fields.UserId) == requestMyRow.Requestor.ToString()));
                    result = result + emailRequestor.Email.ToString() + ";";
                }
            }

            return result;
        }

        public IDictionary<string, string> SetAttachment(IDbConnection connection, Int32 transactionId)
        {
            IDictionary<string, string> dict = new Dictionary<string, string>();
            IDictionary<string, string> attachments = new Dictionary<string, string>();

            //var listSuppDoc = connection.List<TbKtpRow>(x => x.SelectTableFields().Where(string.Format("TransactionId = {0} AND DocumentCode = 'VMR'", transactionId)));
            //if (listSuppDoc.Count() > 0)
            //{
            //    for (int i = 0; i < listSuppDoc.Count(); i++)
            //    {
            //        TransactionSuppDocRow suppDoc = listSuppDoc[i];
            //        var resultFile = Newtonsoft.Json.JsonConvert.DeserializeObject<List<FileNameResult>>(suppDoc.FilePath);
            //        var filename = resultFile[0].Filename.Replace(@"temporary/", "");
            //        var orinalName = resultFile[0].OriginalName;

            //        string tempPath = "~\\App_Data\\Upload\\Temporary\\" + filename;
            //        string filePath = ConfigKey.GetPathFile(tempPath);

            //        dict.Add(orinalName, filePath);
            //        attachments = dict;
            //    }
            //}

            return attachments;
        }

    }

    public class EntityRequest : ServiceRequest
    {
        public object Entity { get; set; }
    }

    #region ActionTransactionAccessButton
    public class AccessButtonRequest : CommonRequestObj
    {
    }

    public class AccessButtonResponse : ServiceResponse
    {
        public List<AccessButtonObj> ListAccessButtonRespose { get; set; }
    }

    #endregion

    #region ActionTransactionAccessButton
    public class NextStatusRequest : CommonRequestObj
    {
        public string AppLine { get; set; }
        public object Entity { get; set; }
    }

    public class NextStatusResponse : CommonResponseObj
    {
    }
    #endregion

    #region ActionUpdateNextStatuss
    public class ProcessNextStatusRequest : CommonRequestObj
    {
    }


    #endregion

    #region Common object
    public class CommonRequestObj : ServiceRequest
    {
        public int TransactionId { get; set; }
        public string TransactionCode { get; set; }
        public string DocumentCode { get; set; }
        public int Action { get; set; }
        public string NextStatusCode { get; set; }
        public int InsertUserId { get; set; }
        public int Requestor { get; set; }
        public bool IsSendEmail { get; set; }
        public string SendEmailTo { get; set; }
        public string SendEmailCc { get; set; }
        public bool CcCreator { get; set; }
        public bool CcRequestor { get; set; }
        //public IList<string> Attachments { get; set; }
        public IDictionary<string, string> Attachments { get; set; }
        public string RejectedReason { get; set; }
        public string TemplateEmailType { get; set; }
    }
    public class CommonResponseObj : ServiceResponse
    {
        public string Index { get; set; }
        public string TransactionStatusCode { get; set; }
        public string FinalStatus { get; set; }
        public string AccessButton { get; set; }
        public string PopupMessage { get; set; }
        public string SendEmailTo { get; set; }
        public bool CcCreator { get; set; }
        public bool CcRequestor { get; set; }
        public bool IsSendEmail { get; set; }
        public string TemplateEmailType { get; set; }
    }
    public class AccessButtonObj
    {
        public string Index { get; set; }
        public string TransactionStatusCode { get; set; }
        public string FinalStatus { get; set; }
        public string AccessButton { get; set; }
        public string PopupMessage { get; set; }
        public string SendEmailTo { get; set; }
        public bool CcCreator { get; set; }
        public bool CcRequestor { get; set; }
    }
    #endregion

    #region GetTransactionOpenBy
    public class TransactionOpenBy
    {
        public Int32 OpenByUserId { get; set; }
        public String OpenByDisplayName { get; set; }
        public String OpenByRoleName { get; set; }

    }
    #endregion
}