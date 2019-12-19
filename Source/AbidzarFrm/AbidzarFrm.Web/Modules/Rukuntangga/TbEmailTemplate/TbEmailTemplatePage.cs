
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/EmailTemplate"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbEmailTemplateRow))]
    public class TbEmailTemplateController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbEmailTemplate/TbEmailTemplateIndex.cshtml");
        }
    }
}