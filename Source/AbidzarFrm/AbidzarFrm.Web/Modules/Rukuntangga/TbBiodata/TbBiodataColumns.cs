
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbBiodata")]
    [BasedOnRow(typeof(Entities.TbBiodataRow), CheckNames = true)]
    public class TbBiodataColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Nik { get; set; }
        public String Gelar { get; set; }
        public String Tahun { get; set; }
        public String Deskripsi { get; set; }
    }
}