
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbKecamatan")]
    [BasedOnRow(typeof(Entities.TbKecamatanRow), CheckNames = true)]
    public class TbKecamatanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String IdKotaNamaKota { get; set; }
        [EditLink]
        public String KodeKecamatan { get; set; }
        public String NamaKecamatan { get; set; }
    }
}