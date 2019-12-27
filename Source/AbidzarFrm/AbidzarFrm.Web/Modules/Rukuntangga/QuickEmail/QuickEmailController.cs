
namespace AbidzarFrm.Rukuntangga.Pages
{
    using System.Web.Mvc;

    [Authorize, RoutePrefix("Rukuntangga/QuickEmail"), Route("{action=index}")]
    public class QuickEmailController : Controller
    {
        public ActionResult Create()
        {
            return View(MVC.Views.Rukuntangga.QuickEmail.QuickEmailIndex);
        }
    }
}