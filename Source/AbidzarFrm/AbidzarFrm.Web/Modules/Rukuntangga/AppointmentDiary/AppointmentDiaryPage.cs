
namespace AbidzarFrm.Rukuntangga.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Rukuntangga/AppointmentDiary"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AppointmentDiaryRow))]
    public class AppointmentDiaryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Rukuntangga/AppointmentDiary/AppointmentDiaryIndex.cshtml");
        }
    }
}