
namespace AbidzarFrm.Rukuntangga.Pages
{
    using AbidzarFrm.Modules.Common.Helpers;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Web.Mvc;

    [Authorize, RoutePrefix("Rukuntangga/UserMember"), Route("{action=index}")]
    public class UserMemberController : Controller
    {

        public ActionResult Index()
        {
            ListResponse<Administration.Entities.UserRow> response = new ListResponse<Administration.Entities.UserRow>();
            response = FunctionGetUser("", 10);

            return View(MVC.Views.Rukuntangga.UserMember.UserMemberIndex, response.Entities);
        }

        public ActionResult GetUser(string filter = "", int totalCount = 10)
        {
            ListResponse<Administration.Entities.UserRow> response = new ListResponse<Administration.Entities.UserRow>();
            response = FunctionGetUser(filter, totalCount);
            return PartialView(MVC.Views.Rukuntangga.UserMember._UserMemberList, response.Entities);
        }

        private ListResponse<Administration.Entities.UserRow> FunctionGetUser(string filter, int totalCount)
        {
            Administration.Repositories.UserRepository repo = new Administration.Repositories.UserRepository();
            ListRequest request = new ListRequest();
            ListResponse<Administration.Entities.UserRow> response = new ListResponse<Administration.Entities.UserRow>();
            var ud = (UserDefinition)Authorization.UserDefinition;
            //using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            //{
            //    request.Criteria = new Criteria("KtpKodeRt") == ud.Ktp.KodeRt & (new Criteria("DisplayName").Like("%" + filter + "%") | new Criteria("Nik").Like("%" + filter + "%"));
            //    request.Take = totalCount;
            //    response = repo.List(connection, request);
            //}


            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                var data = (List<Administration.Entities.UserRow>)connection.Query<Administration.Entities.UserRow>("SpSearUser", param: new { nik = ud.Ktp.Nik, search = filter, takeCount = totalCount }, commandType: System.Data.CommandType.StoredProcedure);

                if (data.Count > 0)
                {
                    response.Entities = data;
                }
            }

            return response;
        }
        public ActionResult Details(int id)
        {
            Administration.Repositories.UserRepository repo = new Administration.Repositories.UserRepository();
            RetrieveRequest request = new RetrieveRequest();
            RetrieveResponse<Administration.Entities.UserRow> response = new RetrieveResponse<Administration.Entities.UserRow>();
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                request.EntityId = id;
                response = repo.Retrieve(connection, request);
            }
            return PartialView(MVC.Views.Rukuntangga.UserMember.UserMemberIndex, response.Entity);
        }
    }
}