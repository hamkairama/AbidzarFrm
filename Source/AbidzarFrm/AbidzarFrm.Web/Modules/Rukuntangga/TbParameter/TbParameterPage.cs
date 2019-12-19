
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/Parameter"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbParameterRow))]
    public class TbParameterController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbParameter/TbParameterIndex.cshtml");
        }
    }
}