
namespace AbidzarFrm.Rukuntangga.Pages
{
    using AbidzarFrm.Modules.Common.Helpers;
    using Serenity.Data;
    using Serenity.Services;
    using System.Web.Mvc;

    [Authorize, RoutePrefix("Rukuntangga/RtMenjawab"), Route("{action=index}")]
    public class RtMenjawabController : Controller
    {

        public ActionResult Index()
        {
            ListResponse<Rukuntangga.Entities.TbTanyaRtRow> response = new ListResponse<Rukuntangga.Entities.TbTanyaRtRow>();
            response = FunctionGetTanyaRt("", 10);

            return View(MVC.Views.Rukuntangga.RtMenjawab.RtMenjawabIndex, response.Entities);
        }

        public ActionResult GetUser(string filter = "", int totalCount = 10)
        {
            ListResponse<Rukuntangga.Entities.TbTanyaRtRow> response = new ListResponse<Rukuntangga.Entities.TbTanyaRtRow>();
            response = FunctionGetTanyaRt(filter, totalCount);
            return PartialView(MVC.Views.Rukuntangga.RtMenjawab.RtMenjawabIndex, response.Entities);
        }

        private ListResponse<Rukuntangga.Entities.TbTanyaRtRow> FunctionGetTanyaRt(string filter, int totalCount)
        {
            Rukuntangga.Repositories.TbTanyaRtRepository repo = new Rukuntangga.Repositories.TbTanyaRtRepository();
            ListRequest request = new ListRequest();
            ListResponse<Rukuntangga.Entities.TbTanyaRtRow> response = new ListResponse<Rukuntangga.Entities.TbTanyaRtRow>();
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                request.Criteria = new Criteria("DibuatOleh") == CurrentSession.Ktp().Nik;
                request.Take = totalCount;
                response = repo.List(connection, request);
            }
            return response;
        }
        public ActionResult GetDetailTanyaRt(int idTanyaRt)
        {
            Rukuntangga.Repositories.TbTanyaRtRepository repo = new Rukuntangga.Repositories.TbTanyaRtRepository();
            ListRequest request = new ListRequest();
            ListResponse<Rukuntangga.Entities.TbTanyaRtRow> response = new ListResponse<Rukuntangga.Entities.TbTanyaRtRow>();
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                request.Criteria = new Criteria("IdTanyaRt") == idTanyaRt;
                response = repo.List(connection, request);
            }
            return PartialView(MVC.Views.Rukuntangga.RtMenjawab._RtMenjawabDetail, response.Entities);
        }
    }
}