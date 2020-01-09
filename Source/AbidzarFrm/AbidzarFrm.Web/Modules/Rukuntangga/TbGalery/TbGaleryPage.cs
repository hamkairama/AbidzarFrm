
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/TbGalery"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbGaleryRow))]
    public class TbGaleryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbGalery/TbGaleryIndex.cshtml");
        }
    }
}