
namespace AbidzarFrm.Rukuntangga.Entities
{
    using AbidzarFrm.Common.Editor;
    using AbidzarFrm.Common.Lookup;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbKtp]")]
    [DisplayName("Ktp"), InstanceName("Ktp")]
    [ReadPermission("Master","Ktp", "View")]
    [ModifyPermission("Master", "Ktp", "Modify")]
    [InsertPermission("Master", "Ktp", "Insert")]
    [DeletePermission("Master", "Ktp", "Delete")]
    [LookupScript("Rukuntangga.Ktp", Permission = "*")]
    public class TbKtpRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, LookupInclude]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Nik"), Size(16), PrimaryKey, QuickSearch, NotNull, LookupInclude]
        public String Nik
        {
            get { return Fields.Nik[this]; }
            set { Fields.Nik[this] = value; }
        }

        [DisplayName("Nama"), Size(100), NotNull, LookupInclude]
        public String Nama
        {
            get { return Fields.Nama[this]; }
            set { Fields.Nama[this] = value; }
        }

        [DisplayName("Tempat Lahir"), Size(100), NotNull, LookupInclude]
        public String TempatLahir
        {
            get { return Fields.TempatLahir[this]; }
            set { Fields.TempatLahir[this] = value; }
        }

        [DisplayName("Tanggal Lahir"), NotNull, LookupInclude]
        public DateTime? TanggalLahir
        {
            get { return Fields.TanggalLahir[this]; }
            set { Fields.TanggalLahir[this] = value; }
        }

        [DisplayName("Jenis Kelamin"), Size(5), NotNull]
        public String JenisKelamin
        {
            get { return Fields.JenisKelamin[this]; }
            set { Fields.JenisKelamin[this] = value; }
        }

        [DisplayName("Alamat"), Size(200), NotNull]
        public String Alamat
        {
            get { return Fields.Alamat[this]; }
            set { Fields.Alamat[this] = value; }
        }
        [DisplayName("Provinsi"), LookupEditor(typeof(ProvinsiLookup)), LookupInclude]
        public Int32? IdProvinsi
        {
            get { return Fields.IdProvinsi[this]; }
            set { Fields.IdProvinsi[this] = value; }
        }

        //[DisplayName("Kota"), LookupEditor(typeof(KotaLookup), CascadeFrom = "IdProvinsi", CascadeField = "IdProvinsi")]
        [DisplayName("Kota"), SelectEditor, LookupInclude]
        public Int32? IdKota
        {
            get { return Fields.IdKota[this]; }
            set { Fields.IdKota[this] = value; }
        }

        //[DisplayName("Kecamatan"), LookupEditor(typeof(KecamatanLookup), CascadeFrom = "IdKota", CascadeField = "IdKota")]
        [DisplayName("Kecamatan"), SelectEditor]
        public Int32? IdKecamatan
        {
            get { return Fields.IdKecamatan[this]; }
            set { Fields.IdKecamatan[this] = value; }
        }

        //[DisplayName("Kelurahan"), NotNull, LookupEditor(typeof(KelurahanLookup), CascadeFrom = "IdKecamatan", CascadeField = "IdKecamatan", FilterField = "IdKecamatan")]
        [DisplayName("Kelurahan"), SelectEditor]
        //[DisplayName("Id Kelurahan"), NotNull, ForeignKey("[dbo].[TbKelurahan]", "Id"), LeftJoin("jIdKelurahan"), TextualField("IdKelurahanKodeKelurahan")]
        public Int32? IdKelurahan
        {
            get { return Fields.IdKelurahan[this]; }
            set { Fields.IdKelurahan[this] = value; }
        }

        [DisplayName("Rt"), Size(3), NotNull]
        public String Rt
        {
            get { return Fields.Rt[this]; }
            set { Fields.Rt[this] = value; }
        }

        [DisplayName("Rw"), Size(3), NotNull]
        public String Rw
        {
            get { return Fields.Rw[this]; }
            set { Fields.Rw[this] = value; }
        }

        [DisplayName("Agama"), Size(5), NotNull]
        public String Agama
        {
            get { return Fields.Agama[this]; }
            set { Fields.Agama[this] = value; }
        }

        [DisplayName("Status Perkawinan"), Size(5), NotNull]
        public String StatusPerkawinan
        {
            get { return Fields.StatusPerkawinan[this]; }
            set { Fields.StatusPerkawinan[this] = value; }
        }

        [DisplayName("Tanggal Perkawinan")]
        public DateTime? TanggalPerkawinan
        {
            get { return Fields.TanggalPerkawinan[this]; }
            set { Fields.TanggalPerkawinan[this] = value; }
        }

        [DisplayName("Jenis Pekerjaan"), Size(5), NotNull]
        public String JenisPekerjaan
        {
            get { return Fields.JenisPekerjaan[this]; }
            set { Fields.JenisPekerjaan[this] = value; }
        }

        [DisplayName("Kewarganegaraan"), Size(5), NotNull]
        public String Kewarganegaraan
        {
            get { return Fields.Kewarganegaraan[this]; }
            set { Fields.Kewarganegaraan[this] = value; }
        }

        [DisplayName("Golongan Darah"), Size(5), NotNull]
        public String GolonganDarah
        {
            get { return Fields.GolonganDarah[this]; }
            set { Fields.GolonganDarah[this] = value; }
        }

        [DisplayName("Pendidikan"), Size(5), NotNull]
        public String Pendidikan
        {
            get { return Fields.Pendidikan[this]; }
            set { Fields.Pendidikan[this] = value; }
        }

        [DisplayName("Photo Ktp")]
        [ImageUploadEditor(FilenameFormat = "Ktp/|KodeRt|/|Nik|/{4}", CopyToHistory = false), LookupInclude]
        public String PhotoKtp
        {
            get { return Fields.PhotoKtp[this]; }
            set { Fields.PhotoKtp[this] = value; }
        }

        [DisplayName("Signature Ktp")]
        [ImageUploadEditor(FilenameFormat = "Ktp/|KodeRt|/|Nik|/{4}", CopyToHistory = false)]
        public String SignatureKtp
        {
            get { return Fields.SignatureKtp[this]; }
            set { Fields.SignatureKtp[this] = value; }
        }

        [DisplayName("Photo Rumah")]
        [ImageUploadEditor(FilenameFormat = "Ktp/|KodeRt|/|Nik|/{4}", CopyToHistory = false)]
        public String PhotoRumah
        {
            get { return Fields.PhotoRumah[this]; }
            set { Fields.PhotoRumah[this] = value; }
        }

        [DisplayName("Kode Pos"), Size(5), NotNull]
        public String KodePos
        {
            get { return Fields.KodePos[this]; }
            set { Fields.KodePos[this] = value; }
        }

        [DisplayName("Nama Ayah"), Size(100), NotNull]
        public String NamaAyah
        {
            get { return Fields.NamaAyah[this]; }
            set { Fields.NamaAyah[this] = value; }
        }

        [DisplayName("Nama Ibu"), Size(100), NotNull]
        public String NamaIbu
        {
            get { return Fields.NamaIbu[this]; }
            set { Fields.NamaIbu[this] = value; }
        }

        [DisplayName("Kk"), Size(16), NotNull]
        public String Kk
        {
            get { return Fields.Kk[this]; }
            set { Fields.Kk[this] = value; }
        }

        [DisplayName("Alamat Tinggal"), Size(200)]
        public String AlamatTinggal
        {
            get { return Fields.AlamatTinggal[this]; }
            set { Fields.AlamatTinggal[this] = value; }
        }
        [DisplayName("Provinsi"), LookupEditor(typeof(ProvinsiLookup))]
        public Int32? IdProvinsiTinggal
        {
            get { return Fields.IdProvinsiTinggal[this]; }
            set { Fields.IdProvinsiTinggal[this] = value; }
        }

        //[DisplayName("Kota"), LookupEditor(typeof(KotaLookup), CascadeFrom = "IdProvinsi", CascadeField = "IdProvinsi")]
        [DisplayName("Kota"), SelectEditor]
        public Int32? IdKotaTinggal
        {
            get { return Fields.IdKotaTinggal[this]; }
            set { Fields.IdKotaTinggal[this] = value; }
        }

        //[DisplayName("Kecamatan"), LookupEditor(typeof(KecamatanLookup), CascadeFrom = "IdKota", CascadeField = "IdKota")]
        [DisplayName("Kecamatan"), SelectEditor]
        public Int32? IdKecamatanTinggal
        {
            get { return Fields.IdKecamatanTinggal[this]; }
            set { Fields.IdKecamatanTinggal[this] = value; }
        }

        //[DisplayName("Kelurahan"), NotNull, LookupEditor(typeof(KelurahanLookup), CascadeFrom = "IdKecamatan", CascadeField = "IdKecamatan", FilterField = "IdKecamatan")]
        [DisplayName("Kelurahan"), SelectEditor]
        //[DisplayName("Id Kelurahan"), NotNull, ForeignKey("[dbo].[TbKelurahan]", "Id"), LeftJoin("jIdKelurahan"), TextualField("IdKelurahanKodeKelurahan")]
        public Int32? IdKelurahanTinggal
        {
            get { return Fields.IdKelurahanTinggal[this]; }
            set { Fields.IdKelurahanTinggal[this] = value; }
        }

        [DisplayName("Rt Tinggal"), Size(3)]
        public String RtTinggal
        {
            get { return Fields.RtTinggal[this]; }
            set { Fields.RtTinggal[this] = value; }
        }

        [DisplayName("Rw Tinggal"), Size(3)]
        public String RwTinggal
        {
            get { return Fields.RwTinggal[this]; }
            set { Fields.RwTinggal[this] = value; }
        }

        [DisplayName("Attachment"), MultipleFileUploadEditor(FilenameFormat = "Ktp/|KodeRt|/|Nik|/Attachment/{4}")]
        public String Attachment
        {
            get { return Fields.Attachment[this]; }
            set { Fields.Attachment[this] = value; }
        }

        [DisplayName("Data Status")]
        public Int32? DataStatus
        {
            get { return Fields.DataStatus[this]; }
            set { Fields.DataStatus[this] = value; }
        }

        [DisplayName("Dibuat Oleh"), Size(20), NotNull]
        public String DibuatOleh
        {
            get { return Fields.DibuatOleh[this]; }
            set { Fields.DibuatOleh[this] = value; }
        }

        [DisplayName("Dibuat Tanggal"), NotNull]
        public DateTime? DibuatTanggal
        {
            get { return Fields.DibuatTanggal[this]; }
            set { Fields.DibuatTanggal[this] = value; }
        }

        [DisplayName("Diedit Oleh"), Size(20)]
        public String DieditOleh
        {
            get { return Fields.DieditOleh[this]; }
            set { Fields.DieditOleh[this] = value; }
        }

        [DisplayName("Diedit Tanggal")]
        public DateTime? DieditTanggal
        {
            get { return Fields.DieditTanggal[this]; }
            set { Fields.DieditTanggal[this] = value; }
        }

        [DisplayName("System Status"), NotNull]
        public Boolean? SystemStatus
        {
            get { return Fields.SystemStatus[this]; }
            set { Fields.SystemStatus[this] = value; }
        }

        [DisplayName("Kode Rt"), Size(20), LookupInclude]
        public String KodeRt
        {
            get { return Fields.KodeRt[this]; }
            set { Fields.KodeRt[this] = value; }
        }

        //[DisplayName("Id Kelurahan Id Kecamatan"), Expression("jIdKelurahan.[IdKecamatan]")]
        //public Int32? IdKelurahanIdKecamatan
        //{
        //    get { return Fields.IdKelurahanIdKecamatan[this]; }
        //    set { Fields.IdKelurahanIdKecamatan[this] = value; }
        //}

        //[DisplayName("Id Kelurahan Kode Kelurahan"), Expression("jIdKelurahan.[KodeKelurahan]")]
        //public String IdKelurahanKodeKelurahan
        //{
        //    get { return Fields.IdKelurahanKodeKelurahan[this]; }
        //    set { Fields.IdKelurahanKodeKelurahan[this] = value; }
        //}

        //[DisplayName("Id Kelurahan Nama Kelurahan"), Expression("jIdKelurahan.[NamaKelurahan]")]
        //public String IdKelurahanNamaKelurahan
        //{
        //    get { return Fields.IdKelurahanNamaKelurahan[this]; }
        //    set { Fields.IdKelurahanNamaKelurahan[this] = value; }
        //}

        //[DisplayName("Id Kelurahan Dibuat Oleh"), Expression("jIdKelurahan.[DibuatOleh]")]
        //public String IdKelurahanDibuatOleh
        //{
        //    get { return Fields.IdKelurahanDibuatOleh[this]; }
        //    set { Fields.IdKelurahanDibuatOleh[this] = value; }
        //}

        //[DisplayName("Id Kelurahan Dibuat Tanggal"), Expression("jIdKelurahan.[DibuatTanggal]")]
        //public DateTime? IdKelurahanDibuatTanggal
        //{
        //    get { return Fields.IdKelurahanDibuatTanggal[this]; }
        //    set { Fields.IdKelurahanDibuatTanggal[this] = value; }
        //}

        //[DisplayName("Id Kelurahan Diedit Oleh"), Expression("jIdKelurahan.[DieditOleh]")]
        //public String IdKelurahanDieditOleh
        //{
        //    get { return Fields.IdKelurahanDieditOleh[this]; }
        //    set { Fields.IdKelurahanDieditOleh[this] = value; }
        //}

        //[DisplayName("Id Kelurahan Diedit Tanggal"), Expression("jIdKelurahan.[DieditTanggal]")]
        //public DateTime? IdKelurahanDieditTanggal
        //{
        //    get { return Fields.IdKelurahanDieditTanggal[this]; }
        //    set { Fields.IdKelurahanDieditTanggal[this] = value; }
        //}

        //[DisplayName("Id Kelurahan System Status"), Expression("jIdKelurahan.[SystemStatus]")]
        //public Boolean? IdKelurahanSystemStatus
        //{
        //    get { return Fields.IdKelurahanSystemStatus[this]; }
        //    set { Fields.IdKelurahanSystemStatus[this] = value; }
        //}

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nik; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbKtpRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Nik;
            public StringField Nama;
            public StringField TempatLahir;
            public DateTimeField TanggalLahir;
            public StringField JenisKelamin;
            public StringField Alamat;
            public Int32Field IdKecamatan;
            public Int32Field IdKota;
            public Int32Field IdProvinsi;
            public Int32Field IdKelurahan;
            public StringField Rt;
            public StringField Rw;
            public StringField Agama;
            public StringField StatusPerkawinan;
            public DateTimeField TanggalPerkawinan;
            public StringField JenisPekerjaan;
            public StringField Kewarganegaraan;
            public StringField GolonganDarah;
            public StringField Pendidikan;
            public StringField PhotoKtp;
            public StringField SignatureKtp;
            public StringField PhotoRumah;
            public StringField KodePos;
            public StringField NamaAyah;
            public StringField NamaIbu;
            public StringField Kk;
            public StringField AlamatTinggal;
            public Int32Field IdKecamatanTinggal;
            public Int32Field IdKotaTinggal;
            public Int32Field IdProvinsiTinggal;
            public Int32Field IdKelurahanTinggal;
            public StringField RtTinggal;
            public StringField RwTinggal;
            public StringField Attachment;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;
            public StringField KodeRt;
            public Int32Field DataStatus;

            //public Int32Field IdKelurahanIdKecamatan;
            //public StringField IdKelurahanKodeKelurahan;
            //public StringField IdKelurahanNamaKelurahan;
            //public StringField IdKelurahanDibuatOleh;
            //public DateTimeField IdKelurahanDibuatTanggal;
            //public StringField IdKelurahanDieditOleh;
            //public DateTimeField IdKelurahanDieditTanggal;
            //public BooleanField IdKelurahanSystemStatus;

            //not mapped
        }
    }
}
