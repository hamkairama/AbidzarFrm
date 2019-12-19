
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/Provinsi"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbProvinsiRow))]
    public class TbProvinsiController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbProvinsi/TbProvinsiIndex.cshtml");
        }
    }
}