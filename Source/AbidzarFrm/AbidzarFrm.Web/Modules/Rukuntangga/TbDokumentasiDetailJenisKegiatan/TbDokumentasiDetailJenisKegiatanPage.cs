
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/DokumentasiDetailJenisKegiatan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbDokumentasiDetailJenisKegiatanRow))]
    public class TbDokumentasiDetailJenisKegiatanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbDokumentasiDetailJenisKegiatan/TbDokumentasiDetailJenisKegiatanIndex.cshtml");
        }
    }
}