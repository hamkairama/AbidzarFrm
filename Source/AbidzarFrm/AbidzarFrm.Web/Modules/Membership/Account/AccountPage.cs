
namespace AbidzarFrm.Membership.Pages
{
    using AbidzarFrm.Rukuntangga.Entities;
    using AbidzarFrm.Rukuntangga.Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using System.Web.Security;

    [RoutePrefix("Account"), Route("{action=index}")]
    public partial class AccountController : Controller
    {
        public static bool UseAdminLTELoginBox = false;

        [HttpGet]
        public ActionResult Login(string activated)
        {
            ViewData["Activated"] = activated;
            ViewData["HideLeftNavigation"] = true;

            if (UseAdminLTELoginBox)
                return View(MVC.Views.Membership.Account.AccountLogin_AdminLTE);
            else
                return View(MVC.Views.Membership.Account.AccountLogin);
        }

        [HttpGet]
        public ActionResult AccessDenied(string returnURL)
        {
            ViewData["HideLeftNavigation"] = !Authorization.IsLoggedIn;

            return View(MVC.Views.Errors.AccessDenied, (object)returnURL);
        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> Login(LoginRequest request)
        {
            return this.ExecuteMethod(() =>
            {
                request.CheckNotNull();

                if (string.IsNullOrEmpty(request.Username))
                    throw new ArgumentNullException("username");

                var username = request.Username;

                if (WebSecurityHelper.Authenticate(ref username, request.Password, false))
                {
                    //set session
                    GetDataKtp(username);

                    return new ServiceResponse();
                }

                throw new ValidationError("AuthenticationError", Texts.Validation.AuthenticationError);
            });
        }

        private ActionResult Error(string message)
        {
            return View(MVC.Views.Errors.ValidationError,
                new ValidationError(Texts.Validation.InvalidResetToken));
        }

        public ActionResult Signout()
        {
            Session.Abandon();
            FormsAuthentication.SignOut();
            return new RedirectResult("~/");
        }

        private void GetDataKtp(string userName)
        {
            TbKtpRow result = new TbKtpRow();
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                var data = connection.Query<TbKtpRow>("SpGetKtpFromUsername", param: new { UserName = userName }, commandType: System.Data.CommandType.StoredProcedure);
                if (data != null)
                {
                    Session["DataKtp"] = data.FirstOrDefault();
                    GetSlideshow(connection, data.FirstOrDefault().KodeRt);
                }
            }
        }

        private void GetSlideshow(IDbConnection connection, string kodeRt)
        {
            List<TbSlideShowRow> result = new List<TbSlideShowRow>();
                result = connection.List<TbSlideShowRow>(x => x.SelectTableFields().Where(string.Format("KodeRt = '{0}'", kodeRt)));
            if (result.Count > 0)
            {
                Session["DataSlideshow"] = result;
            }
        }
    }
}