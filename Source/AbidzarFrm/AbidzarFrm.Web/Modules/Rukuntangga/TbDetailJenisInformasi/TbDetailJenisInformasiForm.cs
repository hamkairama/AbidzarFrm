
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

    [FormScript("Rukuntangga.TbDetailJenisInformasi")]
    [BasedOnRow(typeof(Entities.TbDetailJenisInformasiRow), CheckNames = true)]
    public class TbDetailJenisInformasiForm
    {
        public String Judul { get; set; }
        public String NamaFile { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String Deskripsi { get; set; }
        [LevelAreaEditor]
        public String LevelArea { get; set; }
        [BooleanEditor]
        public Int16 IsLandingPage { get; set; }
    }
}