
namespace AbidzarFrm.Rukuntangga.Pages
{
    using AbidzarFrm.Modules.Common.Helpers;
    using AbidzarFrm.Rukuntangga.Entities;
    using AbidzarFrm.Rukuntangga.Repositories;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Web.Mvc;

    [Authorize, RoutePrefix("Rukuntangga/Warga"), Route("{action=index}")]
    public class WargaController : Controller
    {
        public ActionResult Index()
        {
            ListResponse<TbKtpRow> response = new ListResponse<TbKtpRow>();
            response = FunctionGetWarga("", 10);

            return View(MVC.Views.Rukuntangga.Warga.WargaIndex, response.Entities);
        }

        public ActionResult GetWarga(string filter = "", int totalCount = 10)
        {
            ListResponse<TbKtpRow> response = new ListResponse<TbKtpRow>();
            response = FunctionGetWarga(filter, totalCount);
            return PartialView(MVC.Views.Rukuntangga.Warga._WargaList, response.Entities);
        }

        private ListResponse<TbKtpRow> FunctionGetWarga(string filter, int totalCount)
        {
            TbKtpRepository repo = new TbKtpRepository();
            ListRequest request = new ListRequest();
            ListResponse<TbKtpRow> response = new ListResponse<TbKtpRow>();
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                request.Criteria = new Criteria("KodeRt") == CurrentSession.Ktp().KodeRt & (new Criteria("Nama").Like("%" + filter + "%") | new Criteria("Nik").Like("%" + filter + "%"));
                request.Take = totalCount;
                response = repo.List(connection, request);
            }
            return response;
        }


        public ActionResult Details(int id)
        {
            TbKtpRepository repo = new TbKtpRepository();
            RetrieveRequest request = new RetrieveRequest();
            RetrieveResponse<TbKtpRow> response = new RetrieveResponse<TbKtpRow>();
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                request.EntityId = id;
                response = repo.Retrieve(connection, request);
            }
            return PartialView(MVC.Views.Rukuntangga.Warga.WargaDetail, response.Entity);
        }
    }
}