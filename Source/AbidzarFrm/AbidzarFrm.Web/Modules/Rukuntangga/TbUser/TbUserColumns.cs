
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbUser")]
    [BasedOnRow(typeof(Entities.TbUserRow), CheckNames = true)]
    public class TbUserColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Nik { get; set; }
        public String Sandi { get; set; }
        public String Email { get; set; }
        public Boolean Status { get; set; }
        public Guid KodeVerifikasi { get; set; }
        public Boolean IsMobile { get; set; }
        public String IdRole { get; set; }
        public String DibuatOleh { get; set; }
        public DateTime DibuatTanggal { get; set; }
        public String DieditOleh { get; set; }
        public DateTime DieditTanggal { get; set; }
        public Boolean SystemStatus { get; set; }
    }
}