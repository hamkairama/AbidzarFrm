
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/HistoricalUserLogin"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbHistoricalUserLoginRow))]
    public class TbHistoricalUserLoginController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbHistoricalUserLogin/TbHistoricalUserLoginIndex.cshtml");
        }
    }
}