
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/TanyaRt"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbTanyaRtRow))]
    public class TbTanyaRtController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbTanyaRt/TbTanyaRtIndex.cshtml");
        }
    }
}