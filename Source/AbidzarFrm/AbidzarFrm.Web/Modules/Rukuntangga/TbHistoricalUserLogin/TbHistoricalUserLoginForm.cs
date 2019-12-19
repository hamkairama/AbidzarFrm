
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbHistoricalUserLogin")]
    [BasedOnRow(typeof(Entities.TbHistoricalUserLoginRow), CheckNames = true)]
    public class TbHistoricalUserLoginForm
    {
        [HalfWidth]
        public String Nik { get; set; }
        [HalfWidth]
        public Boolean IsMobile { get; set; }
        [HalfWidth]
        public DateTime Login { get; set; }
        [HalfWidth]
        public DateTime Logout { get; set; }
    }
}