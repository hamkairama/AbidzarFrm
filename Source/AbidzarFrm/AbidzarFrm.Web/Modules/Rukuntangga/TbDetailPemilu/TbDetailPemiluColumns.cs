
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

    [ColumnsScript("Rukuntangga.TbDetailPemilu")]
    [BasedOnRow(typeof(Entities.TbDetailPemiluRow), CheckNames = true)]
    public class TbDetailPemiluColumns
    {
        public Int32 NoUrut { get; set; }
        [EditLink]
        public String Kandidat { get; set; }
        [NamaKtpFormatter]
        public String DibuatOleh { get; set; }
        public DateTime DibuatTanggal { get; set; }
        [NamaKtpFormatter]
        public String DieditOleh { get; set; }
        public DateTime DieditTanggal { get; set; }
    }
}