
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbPollingPemilu")]
    [BasedOnRow(typeof(Entities.TbPollingPemiluRow), CheckNames = true)]
    public class TbPollingPemiluColumns
    {
        [EditLink]
        public String Nik { get; set; }
        public DateTime DibuatTanggal { get; set; }
    }
}