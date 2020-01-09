
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/TbTransactionFlow"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbTransactionFlowRow))]
    public class TbTransactionFlowController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbTransactionFlow/TbTransactionFlowIndex.cshtml");
        }
    }
}