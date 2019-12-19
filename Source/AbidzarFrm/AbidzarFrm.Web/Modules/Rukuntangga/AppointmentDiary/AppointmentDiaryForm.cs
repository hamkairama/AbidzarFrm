
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.AppointmentDiary")]
    [BasedOnRow(typeof(Entities.AppointmentDiaryRow), CheckNames = true)]
    public class AppointmentDiaryForm
    {
        public String Title { get; set; }
        public Int32 SomeImportantKey { get; set; }
        public DateTime DateTimeScheduled { get; set; }
        public Int32 AppointmentLength { get; set; }
        public Int32 StatusEnum { get; set; }
        public String DibuatOleh { get; set; }
        public DateTime DibuatTanggal { get; set; }
        public String DieditOleh { get; set; }
        public DateTime DieditTanggal { get; set; }
        public Boolean SystemStatus { get; set; }
        public String KodeRt { get; set; }
    }
}