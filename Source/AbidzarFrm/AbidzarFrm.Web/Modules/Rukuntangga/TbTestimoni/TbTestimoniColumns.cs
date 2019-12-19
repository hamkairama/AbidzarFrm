
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using AbidzarFrm.Common.Formatter;

    [ColumnsScript("Rukuntangga.TbTestimoni")]
    [BasedOnRow(typeof(Entities.TbTestimoniRow), CheckNames = true)]
    public class TbTestimoniColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        [NamaKtpFormatter]
        public String Nik { get; set; }
        public String Deskripsi { get; set; }
    }
}