
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/Testimoni"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbTestimoniRow))]
    public class TbTestimoniController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbTestimoni/TbTestimoniIndex.cshtml");
        }
    }
}