
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbDetailJenisKegiatan]")]
    [DisplayName("Detail Jenis Kegiatan"), InstanceName("Detail Jenis Kegiatan")]
    [ReadPermission("Kegiatan", "View")]
    [ModifyPermission("Kegiatan", "Modify")]
    [InsertPermission("Kegiatan", "Insert")]
    [DeletePermission("Kegiatan", "Delete")]
    public sealed class TbDetailJenisKegiatanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Jenis Kegiatan"), NotNull, ForeignKey("[dbo].[TbJenisKegiatan]", "Id"), LeftJoin("jIdJenisKegiatan"), TextualField("IdJenisKegiatanJenisKegiatan")]
        public Int32? IdJenisKegiatan
        {
            get { return Fields.IdJenisKegiatan[this]; }
            set { Fields.IdJenisKegiatan[this] = value; }
        }

        [DisplayName("Nama Kegiatan"), Size(100), NotNull, QuickSearch]
        public String NamaKegiatan
        {
            get { return Fields.NamaKegiatan[this]; }
            set { Fields.NamaKegiatan[this] = value; }
        }

        [DisplayName("Lokasi"), Size(100), NotNull]
        public String Lokasi
        {
            get { return Fields.Lokasi[this]; }
            set { Fields.Lokasi[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(500), NotNull]
        public String Deskripsi
        {
            get { return Fields.Deskripsi[this]; }
            set { Fields.Deskripsi[this] = value; }
        }

        [DisplayName("Tanggal Kegiatan"), NotNull]
        public DateTime? TanggalKegiatan
        {
            get { return Fields.TanggalKegiatan[this]; }
            set { Fields.TanggalKegiatan[this] = value; }
        }

        [DisplayName("Warna Latar"), Size(20)]
        public String WarnaLatar
        {
            get { return Fields.WarnaLatar[this]; }
            set { Fields.WarnaLatar[this] = value; }
        }

        [DisplayName("Level Area"), Size(20)]
        public String LevelArea
        {
            get { return Fields.LevelArea[this]; }
            set { Fields.LevelArea[this] = value; }
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

        [DisplayName("Id Jenis Kegiatan Jenis Kegiatan"), Expression("jIdJenisKegiatan.[JenisKegiatan]")]
        public String IdJenisKegiatanJenisKegiatan
        {
            get { return Fields.IdJenisKegiatanJenisKegiatan[this]; }
            set { Fields.IdJenisKegiatanJenisKegiatan[this] = value; }
        }

        [DisplayName("Id Jenis Kegiatan Deskripsi"), Expression("jIdJenisKegiatan.[Deskripsi]")]
        public String IdJenisKegiatanDeskripsi
        {
            get { return Fields.IdJenisKegiatanDeskripsi[this]; }
            set { Fields.IdJenisKegiatanDeskripsi[this] = value; }
        }

        [DisplayName("Id Jenis Kegiatan Dibuat Oleh"), Expression("jIdJenisKegiatan.[DibuatOleh]")]
        public String IdJenisKegiatanDibuatOleh
        {
            get { return Fields.IdJenisKegiatanDibuatOleh[this]; }
            set { Fields.IdJenisKegiatanDibuatOleh[this] = value; }
        }

        [DisplayName("Id Jenis Kegiatan Dibuat Tanggal"), Expression("jIdJenisKegiatan.[DibuatTanggal]")]
        public DateTime? IdJenisKegiatanDibuatTanggal
        {
            get { return Fields.IdJenisKegiatanDibuatTanggal[this]; }
            set { Fields.IdJenisKegiatanDibuatTanggal[this] = value; }
        }

        [DisplayName("Id Jenis Kegiatan Diedit Oleh"), Expression("jIdJenisKegiatan.[DieditOleh]")]
        public String IdJenisKegiatanDieditOleh
        {
            get { return Fields.IdJenisKegiatanDieditOleh[this]; }
            set { Fields.IdJenisKegiatanDieditOleh[this] = value; }
        }

        [DisplayName("Id Jenis Kegiatan Diedit Tanggal"), Expression("jIdJenisKegiatan.[DieditTanggal]")]
        public DateTime? IdJenisKegiatanDieditTanggal
        {
            get { return Fields.IdJenisKegiatanDieditTanggal[this]; }
            set { Fields.IdJenisKegiatanDieditTanggal[this] = value; }
        }

        [DisplayName("Id Jenis Kegiatan System Status"), Expression("jIdJenisKegiatan.[SystemStatus]")]
        public Boolean? IdJenisKegiatanSystemStatus
        {
            get { return Fields.IdJenisKegiatanSystemStatus[this]; }
            set { Fields.IdJenisKegiatanSystemStatus[this] = value; }
        }

        [DisplayName("Id Jenis Kegiatan Kode Rt"), Expression("jIdJenisKegiatan.[KodeRt]")]
        public String IdJenisKegiatanKodeRt
        {
            get { return Fields.IdJenisKegiatanKodeRt[this]; }
            set { Fields.IdJenisKegiatanKodeRt[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NamaKegiatan; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbDetailJenisKegiatanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdJenisKegiatan;
            public StringField NamaKegiatan;
            public StringField Lokasi;
            public StringField Deskripsi;
            public DateTimeField TanggalKegiatan;
            public StringField WarnaLatar;
            public StringField LevelArea;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;

            public StringField IdJenisKegiatanJenisKegiatan;
            public StringField IdJenisKegiatanDeskripsi;
            public StringField IdJenisKegiatanDibuatOleh;
            public DateTimeField IdJenisKegiatanDibuatTanggal;
            public StringField IdJenisKegiatanDieditOleh;
            public DateTimeField IdJenisKegiatanDieditTanggal;
            public BooleanField IdJenisKegiatanSystemStatus;
            public StringField IdJenisKegiatanKodeRt;
        }
    }
}
