
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/Kecamatan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbKecamatanRow))]
    public class TbKecamatanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbKecamatan/TbKecamatanIndex.cshtml");
        }
    }
}