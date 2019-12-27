
namespace AbidzarFrm.Rukuntangga.Pages
{
    using AbidzarFrm.Modules.Common.Helpers;
    using AbidzarFrm.Rukuntangga.Entities;
    using AbidzarFrm.Rukuntangga.Repositories;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Web.Mvc;

    [Authorize, RoutePrefix("Rukuntangga/Berita"), Route("{action=index}")]
    public class BeritaController : Controller
    {
        public ActionResult Index()
        {
            ListResponse<TbJenisInformasiRow> response = new ListResponse<TbJenisInformasiRow>();
            response = FunctionGetBerita(0);
            return View(MVC.Views.Rukuntangga.Berita.BeritaIndex, response.Entities);
        }
        public ActionResult GetBerita(int id)
        {
            ListResponse<TbJenisInformasiRow> response = new ListResponse<TbJenisInformasiRow>();
            response = FunctionGetBerita(id);

            return PartialView(MVC.Views.Rukuntangga.Berita._BeritaList, response.Entities);
        }
        public ListResponse<TbJenisInformasiRow> FunctionGetBerita(int id)
        {
            ListRequest request = new ListRequest();
            ListResponse<TbJenisInformasiRow> response = new ListResponse<TbJenisInformasiRow>();
            TbJenisInformasiRepository repository = new TbJenisInformasiRepository();
            var kodeRt = CurrentSession.Ktp().KodeRt;
            //ViewBag.IdJenisInformasi = id;
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                if (id > 0)
                {
                    request.Criteria = new Criteria("Id") == id & new Criteria("KodeRt") == kodeRt;
                }
                else
                {
                    request.Criteria = new Criteria("KodeRt") == kodeRt;
                }
                response = repository.List(connection, request);
            }
            return response;
        }


        public ActionResult Detail(int id = 0)
        {
            RetrieveRequest request = new RetrieveRequest();
            RetrieveResponse<TbDetailJenisInformasiRow> response = new RetrieveResponse<TbDetailJenisInformasiRow>();
            TbDetailJenisInformasiRepository repository = new TbDetailJenisInformasiRepository();
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                request.EntityId = id;
                response = repository.Retrieve(connection, request);
            }

            return PartialView(MVC.Views.Rukuntangga.Berita._BeritaDetail, response.Entity);
        }
        public ActionResult Terbaru()
        {
            List<TbDetailJenisInformasiRow> response = new List<TbDetailJenisInformasiRow>();
            var kodeRt = CurrentSession.Ktp().KodeRt;
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                var parameterValue = connection.TrySingle<TbParameterRow>(q => q.SelectTableFields().Where(new Criteria(TbParameterRow.Fields.Kode) == "002")).Value;
                var data = connection.Query<TbDetailJenisInformasiRow>("SpGetDetailJenisInformasiNewest", param: new { KodeRt = kodeRt, LamaHari = parameterValue }, commandType: System.Data.CommandType.StoredProcedure);

                if (data != null)
                {
                    response = (List<TbDetailJenisInformasiRow>)data;
                }
            }
            return PartialView(MVC.Views.Rukuntangga.Berita._BeritaTerbaru, response);
        }
        public ActionResult CariBerita(string wildCard)
        {

            ListRequest request = new ListRequest();
            ListResponse<TbDetailJenisInformasiRow> response = new ListResponse<TbDetailJenisInformasiRow>();
            TbDetailJenisInformasiRepository repository = new TbDetailJenisInformasiRepository();
            var kodeRt = CurrentSession.Ktp().KodeRt;
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                request.Criteria = new Criteria("Judul").Like("%" + wildCard + "%");
                response = repository.List(connection, request);
            }
            return PartialView(MVC.Views.Rukuntangga.Berita._BeritaTerbaru, response.Entities);
        }

    }
}