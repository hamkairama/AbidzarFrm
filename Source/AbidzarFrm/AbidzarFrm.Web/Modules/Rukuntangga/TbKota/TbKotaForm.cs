
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbKota")]
    [BasedOnRow(typeof(Entities.TbKotaRow), CheckNames = true)]
    public class TbKotaForm
    {
        public Int32 IdProvinsi { get; set; }
        public String KodeKota { get; set; }
        public String NamaKota { get; set; }
    }
}