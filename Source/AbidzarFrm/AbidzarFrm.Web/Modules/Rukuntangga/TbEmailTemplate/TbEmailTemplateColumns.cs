
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbEmailTemplate")]
    [BasedOnRow(typeof(Entities.TbEmailTemplateRow), CheckNames = true)]
    public class TbEmailTemplateColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String KodeTemplate { get; set; }
        public String Template { get; set; }
        public String Subject { get; set; }
    }
}