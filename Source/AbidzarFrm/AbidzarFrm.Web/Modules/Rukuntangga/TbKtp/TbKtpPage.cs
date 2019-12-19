
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/Ktp"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbKtpRow))]
    public class TbKtpController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbKtp/TbKtpIndex.cshtml");
        }
    }
}