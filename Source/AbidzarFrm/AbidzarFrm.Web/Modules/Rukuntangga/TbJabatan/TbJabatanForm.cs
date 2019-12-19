
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbJabatan")]
    [BasedOnRow(typeof(Entities.TbJabatanRow), CheckNames = true)]
    public class TbJabatanForm
    {
        public String NamaJabatan { get; set; }
    }
}