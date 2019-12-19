
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/LaporanKas"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbLaporanKasRow))]
    public class TbLaporanKasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbLaporanKas/TbLaporanKasIndex.cshtml");
        }
    }
}