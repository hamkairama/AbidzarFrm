
namespace AbidzarFrm.Rukuntangga.Pages
{
    using AbidzarFrm.Modules.Common.Helpers;
    using AbidzarFrm.Rukuntangga.Entities;
    using AbidzarFrm.Rukuntangga.Repositories;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Web.Mvc;

    [Authorize, RoutePrefix("Rukuntangga/Aktifitas"), Route("{action=index}")]
    public class AktifitasController : Controller
    {
        public ActionResult Index()
        {
            ListResponse<TbJenisKegiatanRow> response = new ListResponse<TbJenisKegiatanRow>();
            response = FunctionGetAktifitas(0);
            return View(MVC.Views.Rukuntangga.Aktifitas.AktifitasIndex, response.Entities);
        }
        public ActionResult GetAktifitas(int id)
        {
            ListResponse<TbJenisKegiatanRow> response = new ListResponse<TbJenisKegiatanRow>();
            response = FunctionGetAktifitas(id);

            return PartialView(MVC.Views.Rukuntangga.Aktifitas._AktifitasList, response.Entities);
        }
        public ListResponse<TbJenisKegiatanRow> FunctionGetAktifitas(int id)
        {
            ListRequest request = new ListRequest();
            ListResponse<TbJenisKegiatanRow> response = new ListResponse<TbJenisKegiatanRow>();
            TbJenisKegiatanRepository repository = new TbJenisKegiatanRepository();
            var kodeRt = CurrentSession.Ktp().KodeRt;
            //ViewBag.IdJenisKegiatan = id;
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
            RetrieveResponse<TbDetailJenisKegiatanRow> response = new RetrieveResponse<TbDetailJenisKegiatanRow>();
            TbDetailJenisKegiatanRepository repository = new TbDetailJenisKegiatanRepository();
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                request.EntityId = id;
                response = repository.Retrieve(connection, request);
            }

            return View(MVC.Views.Rukuntangga.Aktifitas._AktifitasDetail, response.Entity);
        }
        public ActionResult Terbaru()
        {
            List<TbDetailJenisKegiatanRow> response = new List<TbDetailJenisKegiatanRow>();
            var kodeRt = CurrentSession.Ktp().KodeRt;
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                var parameterValue = connection.TrySingle<TbParameterRow>(q => q.SelectTableFields().Where(new Criteria(TbParameterRow.Fields.Kode) == "002")).Value;
                var data = connection.Query<TbDetailJenisKegiatanRow>("SpGetDetailJenisKegiatanNewest", param: new { KodeRt = kodeRt, LamaHari = parameterValue }, commandType: System.Data.CommandType.StoredProcedure);

                if (data != null)
                {
                    response = (List<TbDetailJenisKegiatanRow>)data;
                }
            }
            return PartialView(MVC.Views.Rukuntangga.Aktifitas._AktifitasTerbaru, response);
        }
        public ActionResult CariAktifitas(string wildCard)
        {

            ListRequest request = new ListRequest();
            ListResponse<TbDetailJenisKegiatanRow> response = new ListResponse<TbDetailJenisKegiatanRow>();
            TbDetailJenisKegiatanRepository repository = new TbDetailJenisKegiatanRepository();
            var kodeRt = CurrentSession.Ktp().KodeRt;
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                request.Criteria = new Criteria("NamaKegiatan").Like("%" + wildCard + "%");
                response = repository.List(connection, request);
            }
            return PartialView(MVC.Views.Rukuntangga.Aktifitas._AktifitasTerbaru, response.Entities);
        }

    }
}