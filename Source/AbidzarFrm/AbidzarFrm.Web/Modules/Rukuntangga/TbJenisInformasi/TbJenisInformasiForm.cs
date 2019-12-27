
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

    [FormScript("Rukuntangga.TbJenisInformasi")]
    [BasedOnRow(typeof(Entities.TbJenisInformasiRow), CheckNames = true)]
    public class TbJenisInformasiForm
    {
        public String JenisInformasi { get; set; }


        [Category("Detail Jenis Informasi"), Collapsible(true, Collapsed = false)]
        [TbDetailJenisInformasiEditor, DisplayName("Detail")]
        public List<TbDetailJenisInformasiRow> tbDetailJenisInformasiRow { get; set; }
    }
}