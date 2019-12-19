
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/PollingPemilu"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbPollingPemiluRow))]
    public class TbPollingPemiluController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbPollingPemilu/TbPollingPemiluIndex.cshtml");
        }
    }
}