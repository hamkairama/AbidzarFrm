
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

    [ColumnsScript("Rukuntangga.TbHistoricalUserLogin")]
    [BasedOnRow(typeof(Entities.TbHistoricalUserLoginRow), CheckNames = true)]
    public class TbHistoricalUserLoginColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink, NamaKtpFormatter]
        public String Nik { get; set; }
        public DateTime Login { get; set; }
        public DateTime Logout { get; set; }
        public Boolean IsMobile { get; set; }
    }
}