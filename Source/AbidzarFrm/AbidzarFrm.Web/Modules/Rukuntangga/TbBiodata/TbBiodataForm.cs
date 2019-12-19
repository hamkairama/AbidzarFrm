
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbBiodata")]
    [BasedOnRow(typeof(Entities.TbBiodataRow), CheckNames = true)]
    public class TbBiodataForm
    {
        public String Nik { get; set; }
        public String Gelar { get; set; }
        public String Tahun { get; set; }
        public String Deskripsi { get; set; }
    }
}