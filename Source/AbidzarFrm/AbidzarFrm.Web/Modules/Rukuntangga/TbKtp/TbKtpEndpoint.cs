
namespace AbidzarFrm.Rukuntangga.Endpoints
{
    using AbidzarFrm.Modules.Common.Abstraction;
    using AbidzarFrm.Modules.Common.Helpers;
    using AbidzarFrm.Modules.Common.Interface;
    using AbidzarFrm.Rukuntangga.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.TbKtpRepository;
    using MyRow = Entities.TbKtpRow;
    using System.Configuration;

    [RoutePrefix("Services/Rukuntangga/TbKtp"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class TbKtpController : ATransaction, ITransaction
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var fields = MyRow.Fields;

            //request.IncludeColumns.Clear();
            //request.IncludeColumns.Add(fields.ProjectType.PropertyName);
            //request.IncludeColumns.Add(fields.PurposeTypeId.PropertyName);
            //request.IncludeColumns.Add(fields.PriceType.PropertyName);
            //request.IncludeColumns.Add(fields.TrxHeaderId.PropertyName);
            //request.IncludeColumns.Add(fields.TenantId.PropertyName);
            //request.IncludeColumns.Add(fields.SiteTypeVal.PropertyName);
            //request.IncludeColumns.Add(fields.AreaName.PropertyName);
            //request.IncludeColumns.Add(fields.ShelterOutdoor.PropertyName);
            //request.IncludeColumns.Add(fields.KWHType.PropertyName);
            //request.IncludeColumns.Add(fields.PoNumber.PropertyName);
            //request.IncludeColumns.Add(fields.PONumberVersion.PropertyName);
            //request.IncludeColumns.Add(fields.InputPONumberDate.PropertyName);
            //request.IncludeColumns.Add(fields.BoqTotalAmount.PropertyName);
            //request.IncludeColumns.Add(fields.SiteId.PropertyName);
            //request.IncludeColumns.Add(fields.SiteName.PropertyName);
            //request.IncludeColumns.Add(fields.VendorName.PropertyName);
            //request.IncludeColumns.Add(fields.RefTrxId.PropertyName);

            var data = List(connection, request).Entities;

            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.TbKtpReport));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, MyRow.Fields.AliasName.ToString() + "_" + DateTime.Now.ToString("ddMMyyyy_HHmmss") + ".xlsx");
        }


        public AccessButtonResponse GetTransactionAccessButton(IDbConnection connection, AccessButtonRequest request)
        {
            return ActionTransactionAccessButton(connection, request);
        }

        public NextStatusResponse GetNextStatus(IDbConnection connection, NextStatusRequest request)
        {
            request.DocumentCode = request.DocumentCode ?? "KTP";
            return ActionGetNextStatus(connection, request);
        }

        public ResultStatusResponse UpdateNextStatus(IDbConnection connection, NextStatusRequest request)
        {
            ResultStatusResponse rs = new ResultStatusResponse();
            rs.SetSuccessStatus();

            using (var uow = new UnitOfWork(connection))
            {
                if (rs.IsSuccess && request.IsSendEmail && (request.NextStatusCode == "Verified" || request.NextStatusCode == "Rejected"))
                {
                    rs = SendEmail(connection, request);
                }

                if (rs.IsSuccess)
                {
                    uow.Commit();
                }
            }

            return rs;
        }


        public ResultStatusResponse SendEmail(IDbConnection connection, NextStatusRequest request)
        {
            ResultStatusResponse response = new ResultStatusResponse();
            try
            {
                if (request.NextStatusCode == "Complete")
                {
                    SendEmailComplete(connection, request);
                }

                if (request.NextStatusCode == "Rejected")
                {
                    SendEmailRejected(connection, request);
                }

                response.SetSuccessStatus();
            }
            catch (System.Exception ex)
            {
                response.SetSuccessStatus(ex.Message.ToString());
            }

            return response;
        }

        private void SendEmailComplete(IDbConnection connection, NextStatusRequest request)
        {
            MyRow newyRow = new MyRow();
            newyRow = Newtonsoft.Json.JsonConvert.DeserializeObject<MyRow>(request.Entity.ToString());
            //string siteName = GetSiteName(newyRow.SiteId);

            TbEmailTemplateRow emailTemplate = EmailHelper.GetEmailTemplate(request.TemplateEmailType);
            if (emailTemplate != null)
            {
                string subjectHeader = emailTemplate.Subject.ToString();

                string textValue = emailTemplate.Template.ToString();
                string content = textValue;

                //set sendEmailCc
                request.Entity = newyRow;
                request.SendEmailCc = GetSendEmailCc(request);

                //set Attachment
                request.Attachments = SetAttachment(connection, (Int32)newyRow.Id);

                //swith sendEmailTo tobe CC and sendEmailCc to be To
                string param1 = request.SendEmailTo;
                string param2 = request.SendEmailCc;

                request.SendEmailTo = param2;
                request.SendEmailCc = param1;

                ActionSendEmail(subjectHeader, content, request, ConfigurationManager.AppSettings["Email.SMTPVMRegistration"]);
            }
        }

        private void SendEmailRejected(IDbConnection connection, NextStatusRequest request)
        {
            MyRow newyRow = new MyRow();
            newyRow = Newtonsoft.Json.JsonConvert.DeserializeObject<MyRow>(request.Entity.ToString());

            TbEmailTemplateRow emailTemplate = EmailHelper.GetEmailTemplate(request.TemplateEmailType);
            if (emailTemplate != null)
            {
                string subjectHeader = emailTemplate.Subject.ToString();

                string textValue = emailTemplate.Template.ToString();
                string content = textValue;

                //set sendEmailCc
                request.Entity = newyRow;
                request.SendEmailCc = GetSendEmailCc(request);

                //set Attachment                
                request.Attachments = SetAttachment(connection, (Int32)newyRow.Id);

                //swith sendEmailTo tobe CC and sendEmailCc to be To
                string param1 = request.SendEmailTo;
                string param2 = request.SendEmailCc;

                request.SendEmailTo = param2;
                request.SendEmailCc = param1;

                ActionSendEmail(subjectHeader, content, request, ConfigurationManager.AppSettings["Email.SMTPVMRegistration"]);
            }
        }
    }
}
