
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

    [ColumnsScript("Rukuntangga.TbJenisInformasi")]
    [BasedOnRow(typeof(Entities.TbJenisInformasiRow), CheckNames = true)]
    public class TbJenisInformasiColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String JenisInformasi { get; set; }
        [NamaKtpFormatter]
        public String DibuatOleh { get; set; }
        public DateTime DibuatTanggal { get; set; }
        [NamaKtpFormatter]
        public String DieditOleh { get; set; }
        public DateTime DieditTanggal { get; set; }
        public String KodeRt { get; set; }
    }
}