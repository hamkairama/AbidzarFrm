
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/JadwalSiskamlim"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbJadwalSiskamlimRow))]
    public class TbJadwalSiskamlimController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/TbJadwalSiskamlim/TbJadwalSiskamlimIndex.cshtml");
        }
    }
}