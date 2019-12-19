
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/TanyaRtDetail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbTanyaRtDetailRow))]
    public class TbTanyaRtDetailController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbTanyaRtDetail/TbTanyaRtDetailIndex.cshtml");
        }
    }
}