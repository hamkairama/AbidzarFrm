
namespace AbidzarFrm.Rukuntangga.Entities
{
    using AbidzarFrm.Common.Lookup;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbStruktur]")]
    [DisplayName("Struktur"), InstanceName("Struktur")]
    [ReadPermission("Master", "Struktur", "View")]
    [ModifyPermission("Master", "Struktur", "Modify")]
    [InsertPermission("Master", "Struktur", "Insert")]
    [DeletePermission("Master", "Struktur", "Delete")]
    public sealed class TbStrukturRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Nama"), Size(16), PrimaryKey, QuickSearch]
        [LookupEditor(typeof(NikKtpLookup))]
        public String IdKtp
        {
            get { return Fields.IdKtp[this]; }
            set { Fields.IdKtp[this] = value; }
        }

        [DisplayName("Jabatan"), NotNull, ForeignKey("[dbo].[TbJabatan]", "Id"), LeftJoin("jIdJabatan"), TextualField("IdJabatanNamaJabatan")]
        public Int32? IdJabatan
        {
            get { return Fields.IdJabatan[this]; }
            set { Fields.IdJabatan[this] = value; }
        }

        [DisplayName("Awal Periode"), NotNull]
        public DateTime? AwalPeriode
        {
            get { return Fields.AwalPeriode[this]; }
            set { Fields.AwalPeriode[this] = value; }
        }

        [DisplayName("Akhir Periode"), NotNull]
        public DateTime? AkhirPeriode
        {
            get { return Fields.AkhirPeriode[this]; }
            set { Fields.AkhirPeriode[this] = value; }
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

        [DisplayName("Jabatan"), Expression("jIdJabatan.[NamaJabatan]")]
        public String IdJabatanNamaJabatan
        {
            get { return Fields.IdJabatanNamaJabatan[this]; }
            set { Fields.IdJabatanNamaJabatan[this] = value; }
        }

        [DisplayName("Id Jabatan Dibuat Oleh"), Expression("jIdJabatan.[DibuatOleh]")]
        public String IdJabatanDibuatOleh
        {
            get { return Fields.IdJabatanDibuatOleh[this]; }
            set { Fields.IdJabatanDibuatOleh[this] = value; }
        }

        [DisplayName("Id Jabatan Dibuat Tanggal"), Expression("jIdJabatan.[DibuatTanggal]")]
        public DateTime? IdJabatanDibuatTanggal
        {
            get { return Fields.IdJabatanDibuatTanggal[this]; }
            set { Fields.IdJabatanDibuatTanggal[this] = value; }
        }

        [DisplayName("Id Jabatan Diedit Oleh"), Expression("jIdJabatan.[DieditOleh]")]
        public String IdJabatanDieditOleh
        {
            get { return Fields.IdJabatanDieditOleh[this]; }
            set { Fields.IdJabatanDieditOleh[this] = value; }
        }

        [DisplayName("Id Jabatan Diedit Tanggal"), Expression("jIdJabatan.[DieditTanggal]")]
        public DateTime? IdJabatanDieditTanggal
        {
            get { return Fields.IdJabatanDieditTanggal[this]; }
            set { Fields.IdJabatanDieditTanggal[this] = value; }
        }

        [DisplayName("Id Jabatan System Status"), Expression("jIdJabatan.[SystemStatus]")]
        public Boolean? IdJabatanSystemStatus
        {
            get { return Fields.IdJabatanSystemStatus[this]; }
            set { Fields.IdJabatanSystemStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.IdKtp; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbStrukturRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField IdKtp;
            public Int32Field IdJabatan;
            public DateTimeField AwalPeriode;
            public DateTimeField AkhirPeriode;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;

            public StringField IdJabatanNamaJabatan;
            public StringField IdJabatanDibuatOleh;
            public DateTimeField IdJabatanDibuatTanggal;
            public StringField IdJabatanDieditOleh;
            public DateTimeField IdJabatanDieditTanggal;
            public BooleanField IdJabatanSystemStatus;
        }
    }
}
