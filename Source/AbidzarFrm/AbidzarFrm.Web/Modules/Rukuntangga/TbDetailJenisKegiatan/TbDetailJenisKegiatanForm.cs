
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using AbidzarFrm.Common.Editor;

    [FormScript("Rukuntangga.TbDetailJenisKegiatan")]
    [BasedOnRow(typeof(Entities.TbDetailJenisKegiatanRow), CheckNames = true)]
    public class TbDetailJenisKegiatanForm
    {
        public String NamaKegiatan { get; set; }
        [DisplayName("Photo Thumbnail")]
        public String NamaFile { get; set; }
        public String Lokasi { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Deskripsi { get; set; }
        public DateTime TanggalKegiatan { get; set; }
        [WarnaEditor, HalfWidth]
        public String WarnaLatar { get; set; }
        [LevelAreaEditor, HalfWidth]
        public String LevelArea { get; set; }
        [DisplayName("Dokumentasi")]
        public String Dokumentasi { get; set; }
    }
}