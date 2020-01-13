
namespace AbidzarFrm.Rukuntangga.Pages
{
    using AbidzarFrm.Modules.Common.Helpers;
    using AbidzarFrm.Rukuntangga.Entities;
    using AbidzarFrm.Rukuntangga.Repositories;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Web.Mvc;

    [Authorize, RoutePrefix("Rukuntangga/Questioner"), Route("{action=index}")]
    public class QuestionerController : Controller
    {
        public ActionResult Index()
        {
            ListResponse<TbPemiluRow> response = new ListResponse<TbPemiluRow>();
            response = FunctionGetQuestioner(0);
            return View(MVC.Views.Rukuntangga.Questioner.QuestionerIndex, response.Entities);
        }
        //public ActionResult GetQuestioner(int id)
        //{
        //    ListResponse<TbPemiluRow> response = new ListResponse<TbPemiluRow>();
        //    response = FunctionGetQuestioner(id);

        //    return PartialView(MVC.Views.Rukuntangga.Questioner._QuestionerList, response.Entities);
        //}
        public ListResponse<TbPemiluRow> FunctionGetQuestioner(int id)
        {
            ListRequest request = new ListRequest();
            ListResponse<TbPemiluRow> response = new ListResponse<TbPemiluRow>();
            TbPemiluRepository repository = new TbPemiluRepository();
            var ud = (UserDefinition)Serenity.Authorization.UserDefinition;
            var kodeRt = ud.Ktp.KodeRt;
            //ViewBag.IdPemilu = id;
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
            ListRequest request = new ListRequest();
            ListResponse<TbDetailPemiluRow> response = new ListResponse<TbDetailPemiluRow>();
            TbDetailPemiluRepository repository = new TbDetailPemiluRepository();
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                request.Criteria = new Criteria("IdPemilu") == id;
                response = repository.List(connection, request);
            }

            return View(MVC.Views.Rukuntangga.Questioner.QuestionerDetail, response.Entities);
        }


        public ActionResult DetailPemilu(int id)
        {
            RetrieveRequest request = new RetrieveRequest();
            RetrieveResponse<TbDetailPemiluRow> response = new RetrieveResponse<TbDetailPemiluRow>();
            TbDetailPemiluRepository repository = new TbDetailPemiluRepository();
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                request.EntityId = id;
                response = repository.Retrieve(connection, request);
            }

            return PartialView(MVC.Views.Rukuntangga.Questioner._QuestionerDetailPemilu, response.Entity);
        }

        public void Vote(int idDetailPemilu)
        {
            SaveResponse response = new SaveResponse();
            SaveRequest<Entities.TbPollingPemiluRow> request = new SaveRequest<TbPollingPemiluRow>();
            TbPollingPemiluRepository repository = new TbPollingPemiluRepository();
            TbPollingPemiluRow newRow = new TbPollingPemiluRow();
            newRow.IdDetailPemilu = idDetailPemilu;
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            using (var uow = new UnitOfWork(connection))
            {
                {
                    request.Entity = newRow;
                    response = repository.Create(uow, request);
                    uow.Commit();
                }
            }
        }

        public ActionResult IsVoted(int idPemilu)
        {
            RetrieveRequest request = new RetrieveRequest();
            RetrieveResponse<TbPollingPemiluRow> response = new RetrieveResponse<TbPollingPemiluRow>();
            TbPollingPemiluRepository repository = new TbPollingPemiluRepository();
            bool result = false;
            var ud = (UserDefinition)Serenity.Authorization.UserDefinition;
            string nik = ud.Ktp.Nik;
            //string conString = ConfigurationManager.ConnectionStrings["Rukuntangga"].ConnectionString;
            //using (SqlConnection connection = new SqlConnection(conString))
            //{ }
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                var data = (List<TbPollingPemiluRow>)connection.Query<TbPollingPemiluRow>("SpPollingPemiluSelectByNik", param: new { Nik = nik, IdPemilu = idPemilu }, commandType: System.Data.CommandType.StoredProcedure);

                if (data.Count > 0)
                {
                    result = true;
                }
            }

            return Json(result);
        }

    }
}