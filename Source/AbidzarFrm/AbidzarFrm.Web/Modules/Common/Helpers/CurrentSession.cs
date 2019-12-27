using AbidzarFrm.Rukuntangga.Entities;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace AbidzarFrm.Modules.Common.Helpers
{
    public class CurrentSession
    {
        public static TbKtpRow Ktp()
        {
            TbKtpRow result = (TbKtpRow)HttpContext.Current.Session["DataKtp"];
            if (result != null)
                return result;
            else
                return null;
        }
        public static List<TbSlideShowRow> Slideshow()
        {
            List<TbSlideShowRow> result = (List<TbSlideShowRow>)HttpContext.Current.Session["DataSlideshow"];
            if (result != null)
                return result;
            else
                return null;
        }

    }
}