
namespace AbidzarFrm.Rukuntangga.Pages
{
    using AbidzarFrm.Modules.Common.Helpers;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Web.Mvc;

    [Authorize, RoutePrefix("Rukuntangga/RtMenjawab"), Route("{action=index}")]
    public class RtMenjawabController : Controller
    {

        public ActionResult Index()
        {
            ListResponse<Rukuntangga.Entities.TbTanyaRtRow> response = new ListResponse<Rukuntangga.Entities.TbTanyaRtRow>();
            response = FunctionGetTanyaRt("", 1000000);

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

            var roles = UserAdditionalInfo.GetUserRoles(Authorization.Username);
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                if (roles.Contains("RT"))
                {
                    request.Criteria = new Criteria("KtpKodeRt") == CurrentSession.Ktp().KodeRt;
                }
                else if (roles.Contains("WARGA"))
                {
                    request.Criteria = new Criteria("DibuatOleh") == CurrentSession.Ktp().Nik;
                }
                request.Sort = new[] { new SortBy("Id", descending: true) };
                request.Take = totalCount;
                response = repo.List(connection, request);
            }
            return response;
        }
        public ActionResult GetDetailTanyaRt(int idTanyaRt)
        {
            ListResponse<Rukuntangga.Entities.TbTanyaRtRow> response = new ListResponse<Rukuntangga.Entities.TbTanyaRtRow>();
            response = FunctionGetDetailTanyaRt(idTanyaRt);
            return PartialView(MVC.Views.Rukuntangga.RtMenjawab._RtMenjawabDetail, response.Entities);
        }
        public ListResponse<Rukuntangga.Entities.TbTanyaRtRow> FunctionGetDetailTanyaRt(int idTanyaRt)
        {
            Rukuntangga.Repositories.TbTanyaRtRepository repo = new Rukuntangga.Repositories.TbTanyaRtRepository();
            ListRequest request = new ListRequest();
            ListResponse<Rukuntangga.Entities.TbTanyaRtRow> response = new ListResponse<Rukuntangga.Entities.TbTanyaRtRow>();
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                request.Criteria = new Criteria("Id") == idTanyaRt;
                response = repo.List(connection, request);
            }
            return response;
        }

        public ActionResult CreateTanyaRt(string judul)
        {
            SaveRequest<Entities.TbTanyaRtRow> request = new SaveRequest<Entities.TbTanyaRtRow>();
            SaveResponse response = new SaveResponse();
            Repositories.TbTanyaRtRepository repo = new Repositories.TbTanyaRtRepository();

            Entities.TbTanyaRtRow newRow = new Entities.TbTanyaRtRow();
            newRow.Judul = judul;
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            using (var uow = new UnitOfWork(connection))
            {
                request.Entity = newRow;
                response = repo.Create(uow, request);

                uow.Commit();
            }

            ListResponse<Rukuntangga.Entities.TbTanyaRtRow> responseList = new ListResponse<Rukuntangga.Entities.TbTanyaRtRow>();
            responseList = FunctionGetTanyaRt("", 1000000);

            return View(MVC.Views.Rukuntangga.RtMenjawab.RtMenjawabIndex, responseList.Entities);

        }

        public ActionResult CreateDetailTanyaRt(int idTanyaRt,string deskripsi)
        {
            SaveRequest<Entities.TbTanyaRtDetailRow> request = new SaveRequest<Entities.TbTanyaRtDetailRow>();
            SaveResponse response = new SaveResponse();
            Repositories.TbTanyaRtDetailRepository repo = new Repositories.TbTanyaRtDetailRepository();
            Entities.TbTanyaRtDetailRow newRow = new Entities.TbTanyaRtDetailRow();
            newRow.IdTanyaRt = idTanyaRt;
            newRow.Deskripsi = deskripsi;
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            using (var uow = new UnitOfWork(connection))
            {
                request.Entity = newRow;
                response = repo.Create(uow, request);

                uow.Commit();
            }

            ListResponse<Rukuntangga.Entities.TbTanyaRtRow> responseList = new ListResponse<Rukuntangga.Entities.TbTanyaRtRow>();
            responseList = FunctionGetDetailTanyaRt(idTanyaRt);

            return PartialView(MVC.Views.Rukuntangga.RtMenjawab._RtMenjawabDetail, responseList.Entities);

        }
    }
}