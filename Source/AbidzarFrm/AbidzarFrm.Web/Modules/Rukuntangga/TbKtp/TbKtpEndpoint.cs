
namespace AbidzarFrm.Rukuntangga.Endpoints
{
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

    [RoutePrefix("Services/Rukuntangga/TbKtp"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class TbKtpController : ServiceEndpoint
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

    }
}
