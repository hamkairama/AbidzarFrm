
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbEmailTemplate")]
    [BasedOnRow(typeof(Entities.TbEmailTemplateRow), CheckNames = true)]
    public class TbEmailTemplateForm
    {
        public String KodeTemplate { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Subject { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String Template { get; set; }
    }
}