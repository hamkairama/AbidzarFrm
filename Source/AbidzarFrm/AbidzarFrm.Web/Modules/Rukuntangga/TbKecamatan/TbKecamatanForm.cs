
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbKecamatan")]
    [BasedOnRow(typeof(Entities.TbKecamatanRow), CheckNames = true)]
    public class TbKecamatanForm
    {
        public Int32 IdKota { get; set; }
        public String KodeKecamatan { get; set; }
        public String NamaKecamatan { get; set; }
    }
}