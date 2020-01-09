
namespace AbidzarFrm.Rukuntangga.Pages
{
    using System.Web.Mvc;
    using Viewsxx = MVC.Views.BasicSamples.Dialogs;
    using Views = MVC.Views.Rukuntangga;

    public partial class RukuntanggaDialogController : Controller
    {
        [Route("EntityDialogAsPanel/{orderID=null}")]
        public ActionResult EntityDialogAsPanel(int? orderID)
        {
            return View(Viewsxx.EntityDialogAsPanel.Index, orderID);
        }

        [Route("Registrasi")]
        public ActionResult Registrasi()
        {
            return View(Views.Registrasi.Index);
        }

    }
}