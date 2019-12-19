
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbProvinsi")]
    [BasedOnRow(typeof(Entities.TbProvinsiRow), CheckNames = true)]
    public class TbProvinsiColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String KodeProvinsi { get; set; }
        public String NamaProvinsi { get; set; }
    }
}