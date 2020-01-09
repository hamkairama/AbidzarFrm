
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using AbidzarFrm.Common.Editor;
    using AbidzarFrm.Common.Formatter;

    [ColumnsScript("Rukuntangga.TbKtp")]
    [BasedOnRow(typeof(Entities.TbKtpRow), CheckNames = true)]
    public class TbKtpColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [DataStatusFormatter]
        public Int32 DataStatus { get; set; }
        [EditLink]
        public String Nik { get; set; }
        public String Nama { get; set; }
        public String TempatLahir { get; set; }
        [QuickFilter]
        public DateTime TanggalLahir { get; set; }
        [JenisKelaminEditor, QuickFilter]
        public String JenisKelamin { get; set; }
        public String Alamat { get; set; }
        [Sequens3Editor, QuickFilter]
        public String Rt { get; set; }
        [Sequens3Editor, QuickFilter]
        public String Rw { get; set; }
        [AgamaEditor, QuickFilter]
        public String Agama { get; set; }
        [StatusEditor, QuickFilter]
        public String StatusPerkawinan { get; set; }
        public DateTime TanggalPerkawinan { get; set; }
        public String JenisPekerjaan { get; set; }
        [WargaNegaraEditor, QuickFilter]
        public String Kewarganegaraan { get; set; }
        public String GolonganDarah { get; set; }
        [PendidikanEditor, QuickFilter]
        public String Pendidikan { get; set; }
        public String KodePos { get; set; }
        public String NamaAyah { get; set; }
        public String NamaIbu { get; set; }
        public String Kk { get; set; }
        public String AlamatTinggal { get; set; }
        public Int32 IdKelurahanTinggal { get; set; }
        public String RtTinggal { get; set; }
        public String RwTinggal { get; set; }
        public String KodeRt { get; set; }
    }
}