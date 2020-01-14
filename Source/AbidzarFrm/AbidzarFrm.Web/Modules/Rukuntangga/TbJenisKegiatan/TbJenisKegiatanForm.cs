
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

    [FormScript("Rukuntangga.TbJenisKegiatan")]
    [BasedOnRow(typeof(Entities.TbJenisKegiatanRow), CheckNames = true)]
    public class TbJenisKegiatanForm
    {
        public String JenisKegiatan { get; set; }
        public String Deskripsi { get; set; }

        [Category("Detail Jenis Kegiatan"), Collapsible(true, Collapsed = false)]
        [TbDetailJenisKegiatanEditor, DisplayName("Detail")]
        public List<TbDetailJenisKegiatanRow> tbDetailJenisKegiatanRow { get; set; }
    }
}