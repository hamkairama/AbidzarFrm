
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbKelurahan")]
    [BasedOnRow(typeof(Entities.TbKelurahanRow), CheckNames = true)]
    public class TbKelurahanForm
    {
        public Int32 IdKecamatan { get; set; }
        public String KodeKelurahan { get; set; }
        public String NamaKelurahan { get; set; }
    }
}