
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

    [FormScript("Rukuntangga.TbSlideShow")]
    [BasedOnRow(typeof(Entities.TbSlideShowRow), CheckNames = true)]
    public class TbSlideShowForm
    {
        public String Judul { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Deskripsi { get; set; }
        public String FileName { get; set; }
        [TypeSlideshowEditor, HalfWidth]
        public Int32 Tipe { get; set; }
        [TypePosisiIklanEditor, HalfWidth]
        public Int32 Posisi { get; set; }
        public String PathUrl { get; set; }
        [ReadOnly(true)]
        public String KodeRt { get; set; }
    }
}