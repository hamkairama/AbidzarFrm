
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/PhotoKtp"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbPhotoKtpRow))]
    public class TbPhotoKtpController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbPhotoKtp/TbPhotoKtpIndex.cshtml");
        }
    }
}