
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/User"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbUserRow))]
    public class TbUserController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbUser/TbUserIndex.cshtml");
        }
    }
}