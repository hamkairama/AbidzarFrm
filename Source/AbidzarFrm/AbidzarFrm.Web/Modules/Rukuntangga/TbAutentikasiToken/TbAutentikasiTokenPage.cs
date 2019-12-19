
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/AutentikasiToken"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbAutentikasiTokenRow))]
    public class TbAutentikasiTokenController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbAutentikasiToken/TbAutentikasiTokenIndex.cshtml");
        }
    }
}