
namespace AbidzarFrm.Rukuntangga.Pages
{
    using AbidzarFrm.Modules.Common.Helpers;
    using AbidzarFrm.Rukuntangga.Entities;
    using AbidzarFrm.Rukuntangga.Repositories;
    using Serenity.Data;
    using Serenity.Services;
    using System.Web.Mvc;

    [Authorize, RoutePrefix("Rukuntangga/Profile"), Route("{action=index}")]
    public class ProfileController : Controller
    {
        public ActionResult Index()
        {
            TbKtpRepository repo = new TbKtpRepository();
            RetrieveRequest request = new RetrieveRequest();
            RetrieveResponse<TbKtpRow> response = new RetrieveResponse<TbKtpRow>();
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                request.EntityId = CurrentSession.Ktp().Id;
                response = repo.Retrieve(connection, request);
            }

            return View(MVC.Views.Rukuntangga.Profile.ProfileIndex, response.Entity);
        }
    }
}