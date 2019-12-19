
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using AbidzarFrm.Common.Lookup;

    [FormScript("Rukuntangga.TbTestimoni")]
    [BasedOnRow(typeof(Entities.TbTestimoniRow), CheckNames = true)]
    public class TbTestimoniForm
    {
        [LookupEditor(typeof(NikKtpLookup))]
        public String Nik { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Deskripsi { get; set; }
    }
}