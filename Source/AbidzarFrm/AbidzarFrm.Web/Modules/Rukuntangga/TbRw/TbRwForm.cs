
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
    using AbidzarFrm.Rukuntangga.Entities;

    [FormScript("Rukuntangga.TbRw")]
    [BasedOnRow(typeof(Entities.TbRwRow), CheckNames = true)]
    public class TbRwForm
    {
        [Category("Wilayah")]
        [HalfWidth]
        public Int32 IdProvinsi { get; set; }
        [HalfWidth]
        public Int32 IdKota { get; set; }
        [HalfWidth]
        public Int32 IdKecamatan { get; set; }
        [HalfWidth]
        public Int32 IdKelurahan { get; set; }
        [HalfWidth]
        public String KodeRw { get; set; }
        [HalfWidth, Sequens3Editor]
        public String NoRw { get; set; }
        [Category("Personalia")]
        [HalfWidth]
        public String Nik { get; set; }
        [HalfWidth, DisplayName("Nama")]
        public String NamaRw { get; set; }
        public String Photo { get; set; }
        [HalfWidth]
        [TextAreaEditor(Rows = 3)]
        public String Deskripsi { get; set; }
        [HalfWidth]
        [TextAreaEditor(Rows = 3)]
        public String Quotes { get; set; }
        [HalfWidth]
        [TextAreaEditor(Rows = 3)]
        public String Visi { get; set; }
        [HalfWidth]
        [TextAreaEditor(Rows = 3)]
        public String Misi { get; set; }

        //[Category("Biodata"), Collapsible(true, Collapsed = false)]
        //[TbBiodataEditor, DisplayName("Detail")]
        //public List<TbBiodataRow> tbBiodataRow { get; set; }

        [Category("Sosial Media")]
        [HalfWidth]
        public String Facebook { get; set; }
        [HalfWidth]
        public String Twitter { get; set; }
        [HalfWidth]
        public String Instagram { get; set; }
        [HalfWidth]
        public String Whatsapp { get; set; }
        [Category("Landing Page RW")]
        [TextAreaEditor(Rows = 5)]
        public String Header { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String Footer { get; set; }
    }
}