
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbMailLog")]
    [BasedOnRow(typeof(Entities.TbMailLogRow), CheckNames = true)]
    public class TbMailLogForm
    {
        public String Subject { get; set; }
        [TextAreaEditor(Rows = 8)]
        public String Body { get; set; }
        public String From { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String To { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Cc { get; set; }
        public Boolean Status { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String ErrorMessage { get; set; }
    }
}