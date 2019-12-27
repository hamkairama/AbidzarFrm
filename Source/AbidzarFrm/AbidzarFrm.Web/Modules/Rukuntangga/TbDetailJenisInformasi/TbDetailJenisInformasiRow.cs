
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbDetailJenisInformasi]")]
    [DisplayName("Detail Jenis Informasi"), InstanceName("Detail Jenis Informasi")]
    [ReadPermission("Informasi", "View")]
    [ModifyPermission("Informasi", "Modify")]
    [InsertPermission("Informasi", "Insert")]
    [DeletePermission("Informasi", "Delete")]
    public sealed class TbDetailJenisInformasiRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Jenis Informasi"), NotNull, ForeignKey("[dbo].[TbJenisInformasi]", "Id"), LeftJoin("jIdJenisInformasi"), TextualField("IdJenisInformasiJenisInformasi")]
        public Int32? IdJenisInformasi
        {
            get { return Fields.IdJenisInformasi[this]; }
            set { Fields.IdJenisInformasi[this] = value; }
        }

        [DisplayName("Judul"), Size(100), QuickSearch]
        public String Judul
        {
            get { return Fields.Judul[this]; }
            set { Fields.Judul[this] = value; }
        }

        [DisplayName("Nama File"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "DetailJenisInformasi/~", CopyToHistory = true)]
        public String NamaFile
        {
            get { return Fields.NamaFile[this]; }
            set { Fields.NamaFile[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(2147483647), NotNull]
        public String Deskripsi
        {
            get { return Fields.Deskripsi[this]; }
            set { Fields.Deskripsi[this] = value; }
        }

        [DisplayName("Level Area"), Size(50)]
        public String LevelArea
        {
            get { return Fields.LevelArea[this]; }
            set { Fields.LevelArea[this] = value; }
        }

        [DisplayName("Is Landing Page")]
        public Int16? IsLandingPage
        {
            get { return Fields.IsLandingPage[this]; }
            set { Fields.IsLandingPage[this] = value; }
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

        [DisplayName("Jenis Informasi"), Expression("jIdJenisInformasi.[JenisInformasi]"), LookupInclude]
        public String IdJenisInformasiJenisInformasi
        {
            get { return Fields.IdJenisInformasiJenisInformasi[this]; }
            set { Fields.IdJenisInformasiJenisInformasi[this] = value; }
        }

        [DisplayName("Id Jenis Informasi Dibuat Oleh"), Expression("jIdJenisInformasi.[DibuatOleh]")]
        public String IdJenisInformasiDibuatOleh
        {
            get { return Fields.IdJenisInformasiDibuatOleh[this]; }
            set { Fields.IdJenisInformasiDibuatOleh[this] = value; }
        }

        [DisplayName("Id Jenis Informasi Dibuat Tanggal"), Expression("jIdJenisInformasi.[DibuatTanggal]")]
        public DateTime? IdJenisInformasiDibuatTanggal
        {
            get { return Fields.IdJenisInformasiDibuatTanggal[this]; }
            set { Fields.IdJenisInformasiDibuatTanggal[this] = value; }
        }

        [DisplayName("Id Jenis Informasi Diedit Oleh"), Expression("jIdJenisInformasi.[DieditOleh]")]
        public String IdJenisInformasiDieditOleh
        {
            get { return Fields.IdJenisInformasiDieditOleh[this]; }
            set { Fields.IdJenisInformasiDieditOleh[this] = value; }
        }

        [DisplayName("Id Jenis Informasi Diedit Tanggal"), Expression("jIdJenisInformasi.[DieditTanggal]")]
        public DateTime? IdJenisInformasiDieditTanggal
        {
            get { return Fields.IdJenisInformasiDieditTanggal[this]; }
            set { Fields.IdJenisInformasiDieditTanggal[this] = value; }
        }

        [DisplayName("Id Jenis Informasi System Status"), Expression("jIdJenisInformasi.[SystemStatus]")]
        public Boolean? IdJenisInformasiSystemStatus
        {
            get { return Fields.IdJenisInformasiSystemStatus[this]; }
            set { Fields.IdJenisInformasiSystemStatus[this] = value; }
        }

        [DisplayName("Id Jenis Informasi Kode Rt"), Expression("jIdJenisInformasi.[KodeRt]")]
        public String IdJenisInformasiKodeRt
        {
            get { return Fields.IdJenisInformasiKodeRt[this]; }
            set { Fields.IdJenisInformasiKodeRt[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Judul; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbDetailJenisInformasiRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdJenisInformasi;
            public StringField Judul;
            public StringField NamaFile;
            public StringField Deskripsi;
            public StringField LevelArea;
            public Int16Field IsLandingPage;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;

            public StringField IdJenisInformasiJenisInformasi;
            public StringField IdJenisInformasiDibuatOleh;
            public DateTimeField IdJenisInformasiDibuatTanggal;
            public StringField IdJenisInformasiDieditOleh;
            public DateTimeField IdJenisInformasiDieditTanggal;
            public BooleanField IdJenisInformasiSystemStatus;
            public StringField IdJenisInformasiKodeRt;
        }
    }
}
