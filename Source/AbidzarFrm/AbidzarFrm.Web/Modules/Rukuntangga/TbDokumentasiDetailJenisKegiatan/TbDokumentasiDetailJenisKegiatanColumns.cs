
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbDokumentasiDetailJenisKegiatan")]
    [BasedOnRow(typeof(Entities.TbDokumentasiDetailJenisKegiatanRow), CheckNames = true)]
    public class TbDokumentasiDetailJenisKegiatanColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String IdDetailJenisKegiatanNamaKegiatan { get; set; }
        [EditLink]
        public String NamaFile { get; set; }
    }
}