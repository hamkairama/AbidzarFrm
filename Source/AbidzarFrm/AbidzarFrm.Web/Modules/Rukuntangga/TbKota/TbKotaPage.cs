
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/Kota"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbKotaRow))]
    public class TbKotaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbKota/TbKotaIndex.cshtml");
        }
    }
}