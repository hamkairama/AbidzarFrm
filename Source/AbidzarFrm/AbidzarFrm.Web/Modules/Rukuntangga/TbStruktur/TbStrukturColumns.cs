
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

    [ColumnsScript("Rukuntangga.TbStruktur")]
    [BasedOnRow(typeof(Entities.TbStrukturRow), CheckNames = true)]
    public class TbStrukturColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink, NamaKtpFormatter]
        public String IdKtp { get; set; }
        public String IdJabatanNamaJabatan { get; set; }
        public DateTime AwalPeriode { get; set; }
        public DateTime AkhirPeriode { get; set; }
    }
}