
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

    [ColumnsScript("Rukuntangga.TbDetailJenisInformasi")]
    [BasedOnRow(typeof(Entities.TbDetailJenisInformasiRow), CheckNames = true)]
    public class TbDetailJenisInformasiColumns
    {
        [EditLink]
        public String Judul { get; set; }
        public String LevelArea { get; set; }
        [YesNoFormatter]
        public Int16 IsLandingPage { get; set; }
        [NamaKtpFormatter]
        public String DibuatOleh { get; set; }
        public DateTime DibuatTanggal { get; set; }
        [NamaKtpFormatter]
        public String DieditOleh { get; set; }
        public DateTime DieditTanggal { get; set; }
    }
}