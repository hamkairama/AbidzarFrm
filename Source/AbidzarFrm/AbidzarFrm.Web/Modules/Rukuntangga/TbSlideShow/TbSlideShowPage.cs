
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/SlideShow"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbSlideShowRow))]
    public class TbSlideShowController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbSlideShow/TbSlideShowIndex.cshtml");
        }
    }
}