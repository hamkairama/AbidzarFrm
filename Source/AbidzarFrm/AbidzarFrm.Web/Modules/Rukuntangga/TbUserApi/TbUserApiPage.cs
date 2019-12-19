
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/UserApi"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbUserApiRow))]
    public class TbUserApiController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbUserApi/TbUserApiIndex.cshtml");
        }
    }
}