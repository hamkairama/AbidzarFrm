
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/Rt"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbRtRow))]
    public class TbRtController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbRt/TbRtIndex.cshtml");
        }
    }
}