
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbParameter")]
    [BasedOnRow(typeof(Entities.TbParameterRow), CheckNames = true)]
    public class TbParameterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Kode { get; set; }
        public String Deskripsi { get; set; }
        public String Value { get; set; }
    }
}