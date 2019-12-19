
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbTanyaRtDetail")]
    [BasedOnRow(typeof(Entities.TbTanyaRtDetailRow), CheckNames = true)]
    public class TbTanyaRtDetailForm
    {
        public Int32 IdTanyaRt { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Deskripsi { get; set; }
    }
}