
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/Kelurahan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbKelurahanRow))]
    public class TbKelurahanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbKelurahan/TbKelurahanIndex.cshtml");
        }
    }
}