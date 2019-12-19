
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbMailLog")]
    [BasedOnRow(typeof(Entities.TbMailLogRow), CheckNames = true)]
    public class TbMailLogColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Subject { get; set; }
        public String Body { get; set; }
        public String From { get; set; }
        public String To { get; set; }
        public String Cc { get; set; }
        public Boolean Status { get; set; }
        public String ErrorMessage { get; set; }
    }
}