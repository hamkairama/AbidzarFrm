
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbDokumentasiDetailJenisKegiatan]")]
    [DisplayName("Dokumentasi Detail Jenis Kegiatan"), InstanceName("Dokumentasi Detail Jenis Kegiatan")]
    [ReadPermission("Kegiatan", "View")]
    [ModifyPermission("Kegiatan", "Modify")]
    [InsertPermission("Kegiatan", "Insert")]
    [DeletePermission("Kegiatan", "Delete")]
    public sealed class TbDokumentasiDetailJenisKegiatanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Detail Jenis Kegiatan"), NotNull, ForeignKey("[dbo].[TbDetailJenisKegiatan]", "Id"), LeftJoin("jIdDetailJenisKegiatan"), TextualField("IdDetailJenisKegiatanNamaKegiatan")]
        public Int32? IdDetailJenisKegiatan
        {
            get { return Fields.IdDetailJenisKegiatan[this]; }
            set { Fields.IdDetailJenisKegiatan[this] = value; }
        }

        [DisplayName("Nama File"), Size(500), NotNull, QuickSearch]
        [ImageUploadEditor(FilenameFormat = "|KodeRt|/DokumentasiKegiatan/~", CopyToHistory = false)]
        public String NamaFile
        {
            get { return Fields.NamaFile[this]; }
            set { Fields.NamaFile[this] = value; }
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

        [DisplayName("Id Detail Jenis Kegiatan Id Jenis Kegiatan"), Expression("jIdDetailJenisKegiatan.[IdJenisKegiatan]")]
        public Int32? IdDetailJenisKegiatanIdJenisKegiatan
        {
            get { return Fields.IdDetailJenisKegiatanIdJenisKegiatan[this]; }
            set { Fields.IdDetailJenisKegiatanIdJenisKegiatan[this] = value; }
        }

        [DisplayName("Id Detail Jenis Kegiatan Nama Kegiatan"), Expression("jIdDetailJenisKegiatan.[NamaKegiatan]")]
        public String IdDetailJenisKegiatanNamaKegiatan
        {
            get { return Fields.IdDetailJenisKegiatanNamaKegiatan[this]; }
            set { Fields.IdDetailJenisKegiatanNamaKegiatan[this] = value; }
        }

        [DisplayName("Id Detail Jenis Kegiatan Lokasi"), Expression("jIdDetailJenisKegiatan.[Lokasi]")]
        public String IdDetailJenisKegiatanLokasi
        {
            get { return Fields.IdDetailJenisKegiatanLokasi[this]; }
            set { Fields.IdDetailJenisKegiatanLokasi[this] = value; }
        }

        [DisplayName("Id Detail Jenis Kegiatan Deskripsi"), Expression("jIdDetailJenisKegiatan.[Deskripsi]")]
        public String IdDetailJenisKegiatanDeskripsi
        {
            get { return Fields.IdDetailJenisKegiatanDeskripsi[this]; }
            set { Fields.IdDetailJenisKegiatanDeskripsi[this] = value; }
        }

        [DisplayName("Id Detail Jenis Kegiatan Tanggal Kegiatan"), Expression("jIdDetailJenisKegiatan.[TanggalKegiatan]")]
        public DateTime? IdDetailJenisKegiatanTanggalKegiatan
        {
            get { return Fields.IdDetailJenisKegiatanTanggalKegiatan[this]; }
            set { Fields.IdDetailJenisKegiatanTanggalKegiatan[this] = value; }
        }

        [DisplayName("Id Detail Jenis Kegiatan Warna Latar"), Expression("jIdDetailJenisKegiatan.[WarnaLatar]")]
        public String IdDetailJenisKegiatanWarnaLatar
        {
            get { return Fields.IdDetailJenisKegiatanWarnaLatar[this]; }
            set { Fields.IdDetailJenisKegiatanWarnaLatar[this] = value; }
        }

        [DisplayName("Id Detail Jenis Kegiatan Level Area"), Expression("jIdDetailJenisKegiatan.[LevelArea]")]
        public String IdDetailJenisKegiatanLevelArea
        {
            get { return Fields.IdDetailJenisKegiatanLevelArea[this]; }
            set { Fields.IdDetailJenisKegiatanLevelArea[this] = value; }
        }

        [DisplayName("Id Detail Jenis Kegiatan Dibuat Oleh"), Expression("jIdDetailJenisKegiatan.[DibuatOleh]")]
        public String IdDetailJenisKegiatanDibuatOleh
        {
            get { return Fields.IdDetailJenisKegiatanDibuatOleh[this]; }
            set { Fields.IdDetailJenisKegiatanDibuatOleh[this] = value; }
        }

        [DisplayName("Id Detail Jenis Kegiatan Dibuat Tanggal"), Expression("jIdDetailJenisKegiatan.[DibuatTanggal]")]
        public DateTime? IdDetailJenisKegiatanDibuatTanggal
        {
            get { return Fields.IdDetailJenisKegiatanDibuatTanggal[this]; }
            set { Fields.IdDetailJenisKegiatanDibuatTanggal[this] = value; }
        }

        [DisplayName("Id Detail Jenis Kegiatan Diedit Oleh"), Expression("jIdDetailJenisKegiatan.[DieditOleh]")]
        public String IdDetailJenisKegiatanDieditOleh
        {
            get { return Fields.IdDetailJenisKegiatanDieditOleh[this]; }
            set { Fields.IdDetailJenisKegiatanDieditOleh[this] = value; }
        }

        [DisplayName("Id Detail Jenis Kegiatan Diedit Tanggal"), Expression("jIdDetailJenisKegiatan.[DieditTanggal]")]
        public DateTime? IdDetailJenisKegiatanDieditTanggal
        {
            get { return Fields.IdDetailJenisKegiatanDieditTanggal[this]; }
            set { Fields.IdDetailJenisKegiatanDieditTanggal[this] = value; }
        }

        [DisplayName("Id Detail Jenis Kegiatan System Status"), Expression("jIdDetailJenisKegiatan.[SystemStatus]")]
        public Boolean? IdDetailJenisKegiatanSystemStatus
        {
            get { return Fields.IdDetailJenisKegiatanSystemStatus[this]; }
            set { Fields.IdDetailJenisKegiatanSystemStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaFile; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbDokumentasiDetailJenisKegiatanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdDetailJenisKegiatan;
            public StringField NamaFile;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;

            public Int32Field IdDetailJenisKegiatanIdJenisKegiatan;
            public StringField IdDetailJenisKegiatanNamaKegiatan;
            public StringField IdDetailJenisKegiatanLokasi;
            public StringField IdDetailJenisKegiatanDeskripsi;
            public DateTimeField IdDetailJenisKegiatanTanggalKegiatan;
            public StringField IdDetailJenisKegiatanWarnaLatar;
            public StringField IdDetailJenisKegiatanLevelArea;
            public StringField IdDetailJenisKegiatanDibuatOleh;
            public DateTimeField IdDetailJenisKegiatanDibuatTanggal;
            public StringField IdDetailJenisKegiatanDieditOleh;
            public DateTimeField IdDetailJenisKegiatanDieditTanggal;
            public BooleanField IdDetailJenisKegiatanSystemStatus;
        }
    }
}
