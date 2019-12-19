
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbUserApi")]
    [BasedOnRow(typeof(Entities.TbUserApiRow), CheckNames = true)]
    public class TbUserApiForm
    {
        public String NamaApi { get; set; }
        public String IdUser { get; set; }
        public String Sandi { get; set; }
        public Boolean Status { get; set; }
        public String DibuatOleh { get; set; }
        public DateTime DibuatTanggal { get; set; }
        public String DieditOleh { get; set; }
        public DateTime DieditTanggal { get; set; }
        public Boolean SystemStatus { get; set; }
    }
}