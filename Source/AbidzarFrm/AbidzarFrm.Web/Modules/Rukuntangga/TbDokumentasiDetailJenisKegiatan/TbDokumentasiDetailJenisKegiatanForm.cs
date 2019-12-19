
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbDokumentasiDetailJenisKegiatan")]
    [BasedOnRow(typeof(Entities.TbDokumentasiDetailJenisKegiatanRow), CheckNames = true)]
    public class TbDokumentasiDetailJenisKegiatanForm
    {
        public Int32 IdDetailJenisKegiatan { get; set; }
        public String NamaFile { get; set; }
    }
}