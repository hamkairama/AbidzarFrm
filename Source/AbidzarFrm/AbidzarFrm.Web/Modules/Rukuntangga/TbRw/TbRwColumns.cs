
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
    using AbidzarFrm.Common.Formatter;

    [ColumnsScript("Rukuntangga.TbRw")]
    [BasedOnRow(typeof(Entities.TbRwRow), CheckNames = true)]
    public class TbRwColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [QuickFilter, ProvinsiEditor, ProvinsiFormatter]
        public Int32 IdProvinsi { get; set; }
        [QuickFilter, KotaEditor, KotaFormatter]
        public Int32 IdKota { get; set; }
        [QuickFilter, KecamatanEditor, KecamatanFormatter]
        public Int32 IdKecamatan { get; set; }
        [QuickFilter, KelurahanEditor, KelurahanFormatter]
        public Int32 IdKelurahan { get; set; }
        [EditLink]
        public String KodeRw { get; set; }
        public String Nik { get; set; }
        public String NoRw { get; set; }
        public String NamaRw { get; set; }
    }
}