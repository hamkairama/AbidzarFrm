
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using AbidzarFrm.Common.Editor;
    using AbidzarFrm.Common.Lookup;

    [FormScript("Rukuntangga.TbStruktur")]
    [BasedOnRow(typeof(Entities.TbStrukturRow), CheckNames = true)]
    public class TbStrukturForm
    {
        public String IdKtp { get; set; }
        [JabatanEditor]
        public Int32 IdJabatan { get; set; }
        [HalfWidth]
        public DateTime AwalPeriode { get; set; }
        [HalfWidth]
        public DateTime AkhirPeriode { get; set; }
    }
}