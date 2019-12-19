
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbRt")]
    [BasedOnRow(typeof(Entities.TbRtRow), CheckNames = true)]
    public class TbRtColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String IdRwKodeRw { get; set; }
        [EditLink]
        public String KodeRt { get; set; }
        public String NoRt { get; set; }
        public String Nik { get; set; }
        public String NamaRt { get; set; }
        public String KodeLogin { get; set; }
    }
}