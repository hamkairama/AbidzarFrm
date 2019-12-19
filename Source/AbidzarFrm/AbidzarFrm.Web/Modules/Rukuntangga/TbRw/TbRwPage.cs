
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/Rw"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbRwRow))]
    public class TbRwController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbRw/TbRwIndex.cshtml");
        }
    }
}