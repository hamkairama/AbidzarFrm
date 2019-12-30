using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace AbidzarFrm.Modules.Common.Helpers
{
    public class AuthorizeLogin : AuthorizeAttribute
    {
        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            bool isValid = false;
            if (httpContext.Session["DataKtp"] != null)
                isValid = true;

            return isValid;
        }

        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            filterContext.Result = new RedirectToRouteResult(new RouteValueDictionary(new { controller = "Account", action = "Signout", id = UrlParameter.Optional }));
        }
    }
}