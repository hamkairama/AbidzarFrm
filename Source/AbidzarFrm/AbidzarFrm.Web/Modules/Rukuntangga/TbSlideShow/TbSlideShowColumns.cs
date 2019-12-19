
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using AbidzarFrm.Common.Formatter;

    [ColumnsScript("Rukuntangga.TbSlideShow")]
    [BasedOnRow(typeof(Entities.TbSlideShowRow), CheckNames = true)]
    public class TbSlideShowColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Judul { get; set; }
        public String Deskripsi { get; set; }
        [TypeSlideshowFormatter]
        public Int32 Tipe { get; set; }
        [TypePosisiIklanFormatter]
        public Int32 Posisi { get; set; }
        public String PathUrl { get; set; }
        public String KodeRt { get; set; }
    }
}