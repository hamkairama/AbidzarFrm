
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using AbidzarFrm.Common.Editor;

    [ColumnsScript("Rukuntangga.TbKelurahan")]
    [BasedOnRow(typeof(Entities.TbKelurahanRow), CheckNames = true)]
    public class TbKelurahanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String IdKecamatanNamaKecamatan { get; set; }
        [EditLink]
        public String KodeKelurahan { get; set; }
        public String NamaKelurahan { get; set; }
    }
}