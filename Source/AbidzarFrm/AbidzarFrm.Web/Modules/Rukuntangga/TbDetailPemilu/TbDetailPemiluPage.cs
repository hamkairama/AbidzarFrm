
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/DetailPemilu"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbDetailPemiluRow))]
    public class TbDetailPemiluController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbDetailPemilu/TbDetailPemiluIndex.cshtml");
        }
    }
}