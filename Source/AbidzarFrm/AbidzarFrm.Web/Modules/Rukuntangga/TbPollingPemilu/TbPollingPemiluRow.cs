
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbPollingPemilu]")]
    [DisplayName("Polling Pemilu"), InstanceName("Polling Pemilu")]
    [ReadPermission("Questioner", "Pemilu", "View")]
    [ModifyPermission("Questioner", "Pemilu", "Modify")]
    [InsertPermission("Questioner", "Pemilu", "Insert")]
    [DeletePermission("Questioner", "Pemilu", "Delete")]
    public sealed class TbPollingPemiluRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Detail Pemilu"), NotNull, ForeignKey("[dbo].[TbDetailPemilu]", "Id"), LeftJoin("jIdDetailPemilu"), TextualField("IdDetailPemiluKandidat")]
        public Int32? IdDetailPemilu
        {
            get { return Fields.IdDetailPemilu[this]; }
            set { Fields.IdDetailPemilu[this] = value; }
        }

        [DisplayName("Nik"), Size(16), NotNull, ForeignKey("[dbo].[TbKtp]", "Nik"), LeftJoin("jNik"), QuickSearch, TextualField("NikNama")]
        public String Nik
        {
            get { return Fields.Nik[this]; }
            set { Fields.Nik[this] = value; }
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

        [DisplayName("Id Detail Pemilu Id Pemilu"), Expression("jIdDetailPemilu.[IdPemilu]")]
        public Int32? IdDetailPemiluIdPemilu
        {
            get { return Fields.IdDetailPemiluIdPemilu[this]; }
            set { Fields.IdDetailPemiluIdPemilu[this] = value; }
        }

        [DisplayName("Id Detail Pemilu No Urut"), Expression("jIdDetailPemilu.[NoUrut]")]
        public Int32? IdDetailPemiluNoUrut
        {
            get { return Fields.IdDetailPemiluNoUrut[this]; }
            set { Fields.IdDetailPemiluNoUrut[this] = value; }
        }

        [DisplayName("Id Detail Pemilu Kandidat"), Expression("jIdDetailPemilu.[Kandidat]")]
        public String IdDetailPemiluKandidat
        {
            get { return Fields.IdDetailPemiluKandidat[this]; }
            set { Fields.IdDetailPemiluKandidat[this] = value; }
        }

        [DisplayName("Id Detail Pemilu File Name"), Expression("jIdDetailPemilu.[FileName]")]
        public String IdDetailPemiluFileName
        {
            get { return Fields.IdDetailPemiluFileName[this]; }
            set { Fields.IdDetailPemiluFileName[this] = value; }
        }

        [DisplayName("Id Detail Pemilu Dibuat Oleh"), Expression("jIdDetailPemilu.[DibuatOleh]")]
        public String IdDetailPemiluDibuatOleh
        {
            get { return Fields.IdDetailPemiluDibuatOleh[this]; }
            set { Fields.IdDetailPemiluDibuatOleh[this] = value; }
        }

        [DisplayName("Id Detail Pemilu Dibuat Tanggal"), Expression("jIdDetailPemilu.[DibuatTanggal]")]
        public DateTime? IdDetailPemiluDibuatTanggal
        {
            get { return Fields.IdDetailPemiluDibuatTanggal[this]; }
            set { Fields.IdDetailPemiluDibuatTanggal[this] = value; }
        }

        [DisplayName("Id Detail Pemilu Diedit Oleh"), Expression("jIdDetailPemilu.[DieditOleh]")]
        public String IdDetailPemiluDieditOleh
        {
            get { return Fields.IdDetailPemiluDieditOleh[this]; }
            set { Fields.IdDetailPemiluDieditOleh[this] = value; }
        }

        [DisplayName("Id Detail Pemilu Diedit Tanggal"), Expression("jIdDetailPemilu.[DieditTanggal]")]
        public DateTime? IdDetailPemiluDieditTanggal
        {
            get { return Fields.IdDetailPemiluDieditTanggal[this]; }
            set { Fields.IdDetailPemiluDieditTanggal[this] = value; }
        }

        [DisplayName("Id Detail Pemilu System Status"), Expression("jIdDetailPemilu.[SystemStatus]")]
        public Boolean? IdDetailPemiluSystemStatus
        {
            get { return Fields.IdDetailPemiluSystemStatus[this]; }
            set { Fields.IdDetailPemiluSystemStatus[this] = value; }
        }

        [DisplayName("Nik Id"), Expression("jNik.[Id]")]
        public Int32? NikId
        {
            get { return Fields.NikId[this]; }
            set { Fields.NikId[this] = value; }
        }

        [DisplayName("Nik Nama"), Expression("jNik.[Nama]")]
        public String NikNama
        {
            get { return Fields.NikNama[this]; }
            set { Fields.NikNama[this] = value; }
        }

        [DisplayName("Nik Tempat Lahir"), Expression("jNik.[TempatLahir]")]
        public String NikTempatLahir
        {
            get { return Fields.NikTempatLahir[this]; }
            set { Fields.NikTempatLahir[this] = value; }
        }

        [DisplayName("Nik Tanggal Lahir"), Expression("jNik.[TanggalLahir]")]
        public DateTime? NikTanggalLahir
        {
            get { return Fields.NikTanggalLahir[this]; }
            set { Fields.NikTanggalLahir[this] = value; }
        }

        [DisplayName("Nik Jenis Kelamin"), Expression("jNik.[JenisKelamin]")]
        public String NikJenisKelamin
        {
            get { return Fields.NikJenisKelamin[this]; }
            set { Fields.NikJenisKelamin[this] = value; }
        }

        [DisplayName("Nik Alamat"), Expression("jNik.[Alamat]")]
        public String NikAlamat
        {
            get { return Fields.NikAlamat[this]; }
            set { Fields.NikAlamat[this] = value; }
        }

        [DisplayName("Nik Id Kelurahan"), Expression("jNik.[IdKelurahan]")]
        public Int32? NikIdKelurahan
        {
            get { return Fields.NikIdKelurahan[this]; }
            set { Fields.NikIdKelurahan[this] = value; }
        }

        [DisplayName("Nik Rt"), Expression("jNik.[Rt]")]
        public String NikRt
        {
            get { return Fields.NikRt[this]; }
            set { Fields.NikRt[this] = value; }
        }

        [DisplayName("Nik Rw"), Expression("jNik.[Rw]")]
        public String NikRw
        {
            get { return Fields.NikRw[this]; }
            set { Fields.NikRw[this] = value; }
        }

        [DisplayName("Nik Agama"), Expression("jNik.[Agama]")]
        public String NikAgama
        {
            get { return Fields.NikAgama[this]; }
            set { Fields.NikAgama[this] = value; }
        }

        [DisplayName("Nik Status Perkawinan"), Expression("jNik.[StatusPerkawinan]")]
        public String NikStatusPerkawinan
        {
            get { return Fields.NikStatusPerkawinan[this]; }
            set { Fields.NikStatusPerkawinan[this] = value; }
        }

        [DisplayName("Nik Tanggal Perkawinan"), Expression("jNik.[TanggalPerkawinan]")]
        public DateTime? NikTanggalPerkawinan
        {
            get { return Fields.NikTanggalPerkawinan[this]; }
            set { Fields.NikTanggalPerkawinan[this] = value; }
        }

        [DisplayName("Nik Jenis Pekerjaan"), Expression("jNik.[JenisPekerjaan]")]
        public String NikJenisPekerjaan
        {
            get { return Fields.NikJenisPekerjaan[this]; }
            set { Fields.NikJenisPekerjaan[this] = value; }
        }

        [DisplayName("Nik Kewarganegaraan"), Expression("jNik.[Kewarganegaraan]")]
        public String NikKewarganegaraan
        {
            get { return Fields.NikKewarganegaraan[this]; }
            set { Fields.NikKewarganegaraan[this] = value; }
        }

        [DisplayName("Nik Golongan Darah"), Expression("jNik.[GolonganDarah]")]
        public String NikGolonganDarah
        {
            get { return Fields.NikGolonganDarah[this]; }
            set { Fields.NikGolonganDarah[this] = value; }
        }

        [DisplayName("Nik Pendidikan"), Expression("jNik.[Pendidikan]")]
        public String NikPendidikan
        {
            get { return Fields.NikPendidikan[this]; }
            set { Fields.NikPendidikan[this] = value; }
        }

        [DisplayName("Nik Id Photo Ktp"), Expression("jNik.[IdPhotoKtp]")]
        public Int32? NikIdPhotoKtp
        {
            get { return Fields.NikIdPhotoKtp[this]; }
            set { Fields.NikIdPhotoKtp[this] = value; }
        }

        [DisplayName("Nik Id Signature Ktp"), Expression("jNik.[IdSignatureKtp]")]
        public Int32? NikIdSignatureKtp
        {
            get { return Fields.NikIdSignatureKtp[this]; }
            set { Fields.NikIdSignatureKtp[this] = value; }
        }

        [DisplayName("Nik Kode Pos"), Expression("jNik.[KodePos]")]
        public String NikKodePos
        {
            get { return Fields.NikKodePos[this]; }
            set { Fields.NikKodePos[this] = value; }
        }

        [DisplayName("Nik Nama Ayah"), Expression("jNik.[NamaAyah]")]
        public String NikNamaAyah
        {
            get { return Fields.NikNamaAyah[this]; }
            set { Fields.NikNamaAyah[this] = value; }
        }

        [DisplayName("Nik Nama Ibu"), Expression("jNik.[NamaIbu]")]
        public String NikNamaIbu
        {
            get { return Fields.NikNamaIbu[this]; }
            set { Fields.NikNamaIbu[this] = value; }
        }

        [DisplayName("Nik Kk"), Expression("jNik.[Kk]")]
        public String NikKk
        {
            get { return Fields.NikKk[this]; }
            set { Fields.NikKk[this] = value; }
        }

        [DisplayName("Nik Alamat Tinggal"), Expression("jNik.[AlamatTinggal]")]
        public String NikAlamatTinggal
        {
            get { return Fields.NikAlamatTinggal[this]; }
            set { Fields.NikAlamatTinggal[this] = value; }
        }

        [DisplayName("Nik Id Kelurahan Tinggal"), Expression("jNik.[IdKelurahanTinggal]")]
        public Int32? NikIdKelurahanTinggal
        {
            get { return Fields.NikIdKelurahanTinggal[this]; }
            set { Fields.NikIdKelurahanTinggal[this] = value; }
        }

        [DisplayName("Nik Rt Tinggal"), Expression("jNik.[RtTinggal]")]
        public String NikRtTinggal
        {
            get { return Fields.NikRtTinggal[this]; }
            set { Fields.NikRtTinggal[this] = value; }
        }

        [DisplayName("Nik Rw Tinggal"), Expression("jNik.[RwTinggal]")]
        public String NikRwTinggal
        {
            get { return Fields.NikRwTinggal[this]; }
            set { Fields.NikRwTinggal[this] = value; }
        }

        [DisplayName("Nik Dibuat Oleh"), Expression("jNik.[DibuatOleh]")]
        public String NikDibuatOleh
        {
            get { return Fields.NikDibuatOleh[this]; }
            set { Fields.NikDibuatOleh[this] = value; }
        }

        [DisplayName("Nik Dibuat Tanggal"), Expression("jNik.[DibuatTanggal]")]
        public DateTime? NikDibuatTanggal
        {
            get { return Fields.NikDibuatTanggal[this]; }
            set { Fields.NikDibuatTanggal[this] = value; }
        }

        [DisplayName("Nik Diedit Oleh"), Expression("jNik.[DieditOleh]")]
        public String NikDieditOleh
        {
            get { return Fields.NikDieditOleh[this]; }
            set { Fields.NikDieditOleh[this] = value; }
        }

        [DisplayName("Nik Diedit Tanggal"), Expression("jNik.[DieditTanggal]")]
        public DateTime? NikDieditTanggal
        {
            get { return Fields.NikDieditTanggal[this]; }
            set { Fields.NikDieditTanggal[this] = value; }
        }

        [DisplayName("Nik System Status"), Expression("jNik.[SystemStatus]")]
        public Boolean? NikSystemStatus
        {
            get { return Fields.NikSystemStatus[this]; }
            set { Fields.NikSystemStatus[this] = value; }
        }

        [DisplayName("Nik Kode Rt"), Expression("jNik.[KodeRt]")]
        public String NikKodeRt
        {
            get { return Fields.NikKodeRt[this]; }
            set { Fields.NikKodeRt[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nik; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbPollingPemiluRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdDetailPemilu;
            public StringField Nik;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;

            public Int32Field IdDetailPemiluIdPemilu;
            public Int32Field IdDetailPemiluNoUrut;
            public StringField IdDetailPemiluKandidat;
            public StringField IdDetailPemiluFileName;
            public StringField IdDetailPemiluDibuatOleh;
            public DateTimeField IdDetailPemiluDibuatTanggal;
            public StringField IdDetailPemiluDieditOleh;
            public DateTimeField IdDetailPemiluDieditTanggal;
            public BooleanField IdDetailPemiluSystemStatus;

            public Int32Field NikId;
            public StringField NikNama;
            public StringField NikTempatLahir;
            public DateTimeField NikTanggalLahir;
            public StringField NikJenisKelamin;
            public StringField NikAlamat;
            public Int32Field NikIdKelurahan;
            public StringField NikRt;
            public StringField NikRw;
            public StringField NikAgama;
            public StringField NikStatusPerkawinan;
            public DateTimeField NikTanggalPerkawinan;
            public StringField NikJenisPekerjaan;
            public StringField NikKewarganegaraan;
            public StringField NikGolonganDarah;
            public StringField NikPendidikan;
            public Int32Field NikIdPhotoKtp;
            public Int32Field NikIdSignatureKtp;
            public StringField NikKodePos;
            public StringField NikNamaAyah;
            public StringField NikNamaIbu;
            public StringField NikKk;
            public StringField NikAlamatTinggal;
            public Int32Field NikIdKelurahanTinggal;
            public StringField NikRtTinggal;
            public StringField NikRwTinggal;
            public StringField NikDibuatOleh;
            public DateTimeField NikDibuatTanggal;
            public StringField NikDieditOleh;
            public DateTimeField NikDieditTanggal;
            public BooleanField NikSystemStatus;
            public StringField NikKodeRt;
        }
    }
}
