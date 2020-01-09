
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbDetailPemilu")]
    [BasedOnRow(typeof(Entities.TbDetailPemiluRow), CheckNames = true)]
    public class TbDetailPemiluForm
    {
        public Int32 NoUrut { get; set; }
        public String Kandidat { get; set; }
        public String FileName { get; set; }

        [HtmlContentEditor(Rows = 10)]
        public String Deskripsi { get; set; }

        //[Category("Polling Pemilu"), Collapsible(true, Collapsed = false)]
        //[TbPollingPemiluEditor, DisplayName("Detail")]
        //public List<Entities.TbPollingPemiluRow> tbPollingPemiluRow { get; set; }
    }
}