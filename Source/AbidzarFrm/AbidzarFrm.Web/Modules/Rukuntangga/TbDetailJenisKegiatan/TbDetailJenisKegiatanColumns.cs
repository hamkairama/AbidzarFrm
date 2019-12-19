
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

    [ColumnsScript("Rukuntangga.TbDetailJenisKegiatan")]
    [BasedOnRow(typeof(Entities.TbDetailJenisKegiatanRow), CheckNames = true)]
    public class TbDetailJenisKegiatanColumns
    {
        [EditLink]
        public String NamaKegiatan { get; set; }
        public String Lokasi { get; set; }
        public String Deskripsi { get; set; }
        public DateTime TanggalKegiatan { get; set; }
        public String WarnaLatar { get; set; }
        public String LevelArea { get; set; }
        [NamaKtpFormatter]
        public String DibuatOleh { get; set; }
        public DateTime DibuatTanggal { get; set; }
        [NamaKtpFormatter]
        public String DieditOleh { get; set; }
        public DateTime DieditTanggal { get; set; }
    }
}