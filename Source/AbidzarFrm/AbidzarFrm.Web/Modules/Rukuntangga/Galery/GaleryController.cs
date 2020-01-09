
namespace AbidzarFrm.Rukuntangga.Pages
{
    using AbidzarFrm.Modules.Common.Helpers;
    using AbidzarFrm.Rukuntangga.Entities;
    using AbidzarFrm.Rukuntangga.Repositories;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Web.Mvc;

    [Authorize, RoutePrefix("Rukuntangga/Galery"), Route("{action=index}")]
    public class GaleryController : Controller
    {
        public ActionResult Index()
        {
            ListResponse<TbGaleryRow> response = new ListResponse<TbGaleryRow>();
            response = FunctionGetBerita(0);

            return View(MVC.Views.Rukuntangga.Galery.Index, response.Entities);
        }
        public ActionResult Detail(int? galeryId)
        {
            return View(MVC.Views.Rukuntangga.Galery.Detail, galeryId);
        }
    
        public ListResponse<TbGaleryRow> FunctionGetBerita(int id)
        {
            ListRequest request = new ListRequest();
            ListResponse<TbGaleryRow> response = new ListResponse<TbGaleryRow>();
            TbGaleryRepository repository = new TbGaleryRepository();
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


        public ActionResult Detailxx(int id = 0)
        {
            RetrieveRequest request = new RetrieveRequest();
            RetrieveResponse<TbGaleryRow> response = new RetrieveResponse<TbGaleryRow>();
            TbGaleryRepository repository = new TbGaleryRepository();
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                request.EntityId = id;
                response = repository.Retrieve(connection, request);
            }

            return View(MVC.Views.Rukuntangga.Galery.Detail, response.Entity);
        }

    }
}