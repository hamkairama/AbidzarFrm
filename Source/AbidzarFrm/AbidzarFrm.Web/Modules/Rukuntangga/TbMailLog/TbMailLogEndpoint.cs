
namespace AbidzarFrm.Rukuntangga.Endpoints
{
    using AbidzarFrm.Modules.Common.Helpers;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.TbMailLogRepository;
    using MyRow = Entities.TbMailLogRow;

    [RoutePrefix("Services/Rukuntangga/TbMailLog"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class TbMailLogController : ServiceEndpoint
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

        public ResultStatusResponse SendEmail(SaveRequest<MyRow> request)
        {
            ResultStatusResponse rs = new ResultStatusResponse();

            try
            {
                bool resultSendEmail = false;
                EmailHelper.Send(ref resultSendEmail, request.Entity.Subject, request.Entity.Body, request.Entity.To, request.Entity.Cc, null, request.Entity.From);
                if (resultSendEmail)
                {
                    rs.SetSuccessStatus("Email has been sent");
                }
                else
                {
                    rs.SetErrorStatus("Email is failed to send");
                }
            }
            catch (System.Exception)
            {
                rs.SetErrorStatus("Email is failed to send");
            }

            return rs;
        }

    }
}
