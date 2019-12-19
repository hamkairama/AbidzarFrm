
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/MailLog"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbMailLogRow))]
    public class TbMailLogController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbMailLog/TbMailLogIndex.cshtml");
        }
    }
}