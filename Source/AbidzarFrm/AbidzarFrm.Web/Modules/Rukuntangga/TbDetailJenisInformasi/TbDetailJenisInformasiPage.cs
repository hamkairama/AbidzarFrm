
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/DetailJenisInformasi"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbDetailJenisInformasiRow))]
    public class TbDetailJenisInformasiController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbDetailJenisInformasi/TbDetailJenisInformasiIndex.cshtml");
        }
    }
}