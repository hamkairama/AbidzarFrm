
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/JenisInformasi"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbJenisInformasiRow))]
    public class TbJenisInformasiController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbJenisInformasi/TbJenisInformasiIndex.cshtml");
        }
    }
}