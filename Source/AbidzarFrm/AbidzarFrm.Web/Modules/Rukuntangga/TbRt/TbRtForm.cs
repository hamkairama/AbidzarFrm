
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

    [FormScript("Rukuntangga.TbRt")]
    [BasedOnRow(typeof(Entities.TbRtRow), CheckNames = true)]
    public class TbRtForm
    {
        [Category("Wilayah")]
        [HalfWidth, ReadOnly(true)]
        public Int32 IdRw { get; set; }
        [HalfWidth, ReadOnly(true)]
        public String IdRwKodeRw { get; set; }
        [HalfWidth]
        public String KodeRt { get; set; }
        [HalfWidth, Sequens3Editor]
        public String NoRt { get; set; }
        [HalfWidth]
        public String KodeLogin { get; set; }
        [Category("Personalia")]
        [HalfWidth]
        public String Nik { get; set; }
        [HalfWidth, DisplayName("Nama")]
        public String NamaRt { get; set; }
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
        [Category("Sosial Media")]
        [HalfWidth]
        public String Facebook { get; set; }
        [HalfWidth]
        public String Twitter { get; set; }
        [HalfWidth]
        public String Instagram { get; set; }
        [HalfWidth]
        public String Whatsapp { get; set; }
    }
}