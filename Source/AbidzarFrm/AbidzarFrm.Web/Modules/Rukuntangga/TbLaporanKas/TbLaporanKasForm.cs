﻿
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbLaporanKas")]
    [BasedOnRow(typeof(Entities.TbLaporanKasRow), CheckNames = true)]
    public class TbLaporanKasForm
    {
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