
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using AbidzarFrm.Rukuntangga.Entities;

    [FormScript("Rukuntangga.TbPemilu")]
    [BasedOnRow(typeof(Entities.TbPemiluRow), CheckNames = true)]
    public class TbPemiluForm
    {
        public String Judul { get; set; }
        public String FileName { get; set; }
        public String KodeRt { get; set; }


        [Category("Detail Pemilu"), Collapsible(true, Collapsed = false)]
        [TbDetailPemiluEditor, DisplayName("Detail")]
        public List<TbDetailPemiluRow> tbDetailPemiluRow { get; set; }
    }
}