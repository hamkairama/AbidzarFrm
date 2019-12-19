
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/Pemilu"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbPemiluRow))]
    public class TbPemiluController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbPemilu/TbPemiluIndex.cshtml");
        }
    }
}