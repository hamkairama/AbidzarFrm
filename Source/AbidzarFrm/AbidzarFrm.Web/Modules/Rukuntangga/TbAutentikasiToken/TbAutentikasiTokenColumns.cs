
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbAutentikasiToken")]
    [BasedOnRow(typeof(Entities.TbAutentikasiTokenRow), CheckNames = true)]
    public class TbAutentikasiTokenColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Token { get; set; }
        public String Aplikasi { get; set; }
    }
}