
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbListOfValue")]
    [BasedOnRow(typeof(Entities.TbListOfValueRow), CheckNames = true)]
    public class TbListOfValueForm
    {
        public String Kode { get; set; }
        public String Deskripsi { get; set; }
        public String Value { get; set; }
        public String Group { get; set; }
    }
}