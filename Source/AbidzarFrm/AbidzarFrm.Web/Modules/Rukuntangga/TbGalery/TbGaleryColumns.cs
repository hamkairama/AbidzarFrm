
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbGalery")]
    [BasedOnRow(typeof(Entities.TbGaleryRow), CheckNames = true)]
    public class TbGaleryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Deskripsi { get; set; }
        public String LevelArea { get; set; }
    }
}