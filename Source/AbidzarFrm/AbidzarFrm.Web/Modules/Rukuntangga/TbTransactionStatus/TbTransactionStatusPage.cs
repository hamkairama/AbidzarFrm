
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/TbTransactionStatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbTransactionStatusRow))]
    public class TbTransactionStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbTransactionStatus/TbTransactionStatusIndex.cshtml");
        }
    }
}