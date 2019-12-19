
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/Struktur"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbStrukturRow))]
    public class TbStrukturController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbStruktur/TbStrukturIndex.cshtml");
        }
    }
}