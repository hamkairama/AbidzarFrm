
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/TbTransactionDocumentCode"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbTransactionDocumentCodeRow))]
    public class TbTransactionDocumentCodeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbTransactionDocumentCode/TbTransactionDocumentCodeIndex.cshtml");
        }
    }
}