
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

    [FormScript("Rukuntangga.TbGalery")]
    [BasedOnRow(typeof(Entities.TbGaleryRow), CheckNames = true)]
    public class TbGaleryForm
    {
        public String Deskripsi { get; set; }
        [LevelAreaEditor]
        public String LevelArea { get; set; }
        public String Thumbnail { get; set; }
        public String Photos { get; set; }
    }
}