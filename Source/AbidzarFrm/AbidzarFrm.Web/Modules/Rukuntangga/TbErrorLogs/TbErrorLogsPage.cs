
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/TbErrorLogs"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbErrorLogsRow))]
    public class TbErrorLogsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbErrorLogs/TbErrorLogsIndex.cshtml");
        }
    }
}