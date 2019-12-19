﻿
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbLaporanKas")]
    [BasedOnRow(typeof(Entities.TbLaporanKasRow), CheckNames = true)]
    public class TbLaporanKasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Deskripsi { get; set; }
        public DateTime Tanggal { get; set; }
        public Decimal Total { get; set; }
        public String Tipe { get; set; }
        public String DibuatOleh { get; set; }
        public DateTime DibuatTanggal { get; set; }
        public String DieditOleh { get; set; }
        public DateTime DieditTanggal { get; set; }
        public Boolean SystemStatus { get; set; }
        public String KodeRt { get; set; }
    }
}