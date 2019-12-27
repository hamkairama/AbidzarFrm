
namespace AbidzarFrm.Rukuntangga.Pages
{
    using System.Web.Mvc;

    [Authorize, RoutePrefix("Rukuntangga/Profile"), Route("{action=index}")]
    public class ProfileController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Rukuntangga.Profile.ProfileIndex);
        }
    }
}