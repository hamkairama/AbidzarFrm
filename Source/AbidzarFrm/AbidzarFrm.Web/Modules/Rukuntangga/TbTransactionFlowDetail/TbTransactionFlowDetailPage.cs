
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/TbTransactionFlowDetail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbTransactionFlowDetailRow))]
    public class TbTransactionFlowDetailController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbTransactionFlowDetail/TbTransactionFlowDetailIndex.cshtml");
        }
    }
}