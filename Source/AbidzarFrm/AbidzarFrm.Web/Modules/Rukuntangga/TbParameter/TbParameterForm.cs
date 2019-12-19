
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbParameter")]
    [BasedOnRow(typeof(Entities.TbParameterRow), CheckNames = true)]
    public class TbParameterForm
    {
        public String Kode { get; set; }
        public String Deskripsi { get; set; }
        public String Value { get; set; }
    }
}