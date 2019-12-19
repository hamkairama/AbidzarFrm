
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/DetailJenisKegiatan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbDetailJenisKegiatanRow))]
    public class TbDetailJenisKegiatanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbDetailJenisKegiatan/TbDetailJenisKegiatanIndex.cshtml");
        }
    }
}