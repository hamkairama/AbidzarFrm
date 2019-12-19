
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/Biodata"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbBiodataRow))]
    public class TbBiodataController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbBiodata/TbBiodataIndex.cshtml");
        }
    }
}