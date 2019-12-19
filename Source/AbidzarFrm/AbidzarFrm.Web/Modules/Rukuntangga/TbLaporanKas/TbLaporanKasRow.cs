
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbLaporanKas]")]
    [DisplayName("Laporan Kas"), InstanceName("Laporan Kas")]
    [ReadPermission("Master", "LaporanKas", "View")]
    [ModifyPermission("Master", "LaporanKas", "Modify")]
    [InsertPermission("Master", "LaporanKas", "Insert")]
    [DeletePermission("Master", "LaporanKas", "Delete")]
    public sealed class TbLaporanKasRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(500), NotNull, QuickSearch]
        public String Deskripsi
        {
            get { return Fields.Deskripsi[this]; }
            set { Fields.Deskripsi[this] = value; }
        }

        [DisplayName("Tanggal"), NotNull]
        public DateTime? Tanggal
        {
            get { return Fields.Tanggal[this]; }
            set { Fields.Tanggal[this] = value; }
        }

        [DisplayName("Total"), Size(18), NotNull]
        public Decimal? Total
        {
            get { return Fields.Total[this]; }
            set { Fields.Total[this] = value; }
        }

        [DisplayName("Tipe"), Size(2), NotNull]
        public String Tipe
        {
            get { return Fields.Tipe[this]; }
            set { Fields.Tipe[this] = value; }
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

        [DisplayName("Kode Rt"), Size(20)]
        public String KodeRt
        {
            get { return Fields.KodeRt[this]; }
            set { Fields.KodeRt[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Deskripsi; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbLaporanKasRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Deskripsi;
            public DateTimeField Tanggal;
            public DecimalField Total;
            public StringField Tipe;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;
            public StringField KodeRt;
        }
    }
}
