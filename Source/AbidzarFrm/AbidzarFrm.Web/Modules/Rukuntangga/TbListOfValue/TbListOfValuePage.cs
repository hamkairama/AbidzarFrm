
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/ListOfValue"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbListOfValueRow))]
    public class TbListOfValueController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbListOfValue/TbListOfValueIndex.cshtml");
        }
    }
}