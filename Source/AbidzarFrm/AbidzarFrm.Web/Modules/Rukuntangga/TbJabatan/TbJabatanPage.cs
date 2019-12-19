
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/Jabatan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbJabatanRow))]
    public class TbJabatanController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbJabatan/TbJabatanIndex.cshtml");
        }
    }
}