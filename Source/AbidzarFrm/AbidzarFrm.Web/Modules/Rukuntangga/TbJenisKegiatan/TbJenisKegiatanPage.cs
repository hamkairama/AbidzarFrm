
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/JenisKegiatan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbJenisKegiatanRow))]
    public class TbJenisKegiatanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbJenisKegiatan/TbJenisKegiatanIndex.cshtml");
        }
    }
}