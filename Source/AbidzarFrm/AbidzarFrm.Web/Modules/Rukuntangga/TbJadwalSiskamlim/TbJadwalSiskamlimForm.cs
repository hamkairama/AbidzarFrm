
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbJadwalSiskamlim")]
    [BasedOnRow(typeof(Entities.TbJadwalSiskamlimRow), CheckNames = true)]
    public class TbJadwalSiskamlimForm
    {
        public String Nik { get; set; }
        public String Nama { get; set; }
        public DateTime Tanggal { get; set; }
        public String DibuatOleh { get; set; }
        public DateTime DibuatTanggal { get; set; }
        public String DieditOleh { get; set; }
        public DateTime DieditTanggal { get; set; }
        public Boolean SystemStatus { get; set; }
    }
}