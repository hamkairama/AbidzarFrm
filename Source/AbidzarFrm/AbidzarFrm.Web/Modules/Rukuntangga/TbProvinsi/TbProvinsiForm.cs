
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbProvinsi")]
    [BasedOnRow(typeof(Entities.TbProvinsiRow), CheckNames = true)]
    public class TbProvinsiForm
    {
        public String KodeProvinsi { get; set; }
        public String NamaProvinsi { get; set; }
    }
}