
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

    [FormScript("Rukuntangga.TbKtp")]
    [BasedOnRow(typeof(Entities.TbKtpRow), CheckNames = true)]
    public class TbKtpForm
    {
        [Tab("KTP")]
        [Category("General")]
        [HalfWidth]
        public String Kk { get; set; }
        [HalfWidth]
        public String Nik { get; set; }
        public String Nama { get; set; }
        [HalfWidth]
        public String TempatLahir { get; set; }
        [HalfWidth]
        public DateTime TanggalLahir { get; set; }
        [HalfWidth]
        [AgamaEditor]
        public String Agama { get; set; }
        [HalfWidth]
        [JenisKelaminEditor]
        public String JenisKelamin { get; set; }
        [HalfWidth]
        public Int32 IdProvinsi { get; set; }
        [HalfWidth]
        public Int32 IdKota { get; set; }
        [HalfWidth]
        public Int32 IdKecamatan { get; set; }
        [HalfWidth]
        public Int32 IdKelurahan { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Alamat { get; set; }
        [QuarterWidth, Sequens3Editor]
        public String Rt { get; set; }
        [QuarterWidth, Sequens3Editor]
        public String Rw { get; set; }
        [HalfWidth]
        public String KodePos { get; set; }
        [HalfWidth]
        [DisplayName("Status")]
        [StatusEditor]
        public String StatusPerkawinan { get; set; }
        [HalfWidth]
        [DisplayName("Tanggal Kawin")]
        public DateTime TanggalPerkawinan { get; set; }
        [MediumQuarterWidth]
        [WargaNegaraEditor]
        public String Kewarganegaraan { get; set; }
        [MediumQuarterWidth]
        [PekerjaanEditor]
        public String JenisPekerjaan { get; set; }
        [MediumQuarterWidth]
        [GolonganDarahEditor]
        public String GolonganDarah { get; set; }
        [MediumQuarterWidth]
        [PendidikanEditor]
        public String Pendidikan { get; set; }
        [HalfWidth]
        public String PhotoKtp { get; set; }
        [HalfWidth]
        public String SignatureKtp { get; set; }
        [HalfWidth]
        public String NamaAyah { get; set; }
        [HalfWidth]
        public String NamaIbu { get; set; }
        [Tab("Alamat Tinggal")]
        [HalfWidth]
        [DisplayName("Kelurahan")]
        public Int32 IdKelurahanTinggal { get; set; }
        [HalfWidth]
        [DisplayName("Alamat")]
        public String AlamatTinggal { get; set; }
        [HalfWidth, Sequens3Editor]
        [DisplayName("RT")]
        public String RtTinggal { get; set; }
        [HalfWidth, Sequens3Editor]
        [DisplayName("RW")]
        public String RwTinggal { get; set; }
        [Category("Kode RT ")]
        public String KodeRt { get; set; }
        [Tab("Dokumen")]
        public String Attachment { get; set; }
    }
}