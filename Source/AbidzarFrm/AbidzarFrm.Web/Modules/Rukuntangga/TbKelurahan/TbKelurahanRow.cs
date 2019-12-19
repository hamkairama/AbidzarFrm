
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbKelurahan]")]
    [DisplayName("Kelurahan"), InstanceName("Kelurahan")]
    [ReadPermission("Master", "Kelurahan", "View")]
    [ModifyPermission("Master", "Kelurahan", "Modify")]
    [InsertPermission("Master", "Kelurahan", "Insert")]
    [DeletePermission("Master", "Kelurahan", "Delete")]
    [LookupScript("Rukuntangga.Kelurahan", Permission = "*")]
    public sealed class TbKelurahanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, LookupInclude]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Kecamatan"), NotNull, ForeignKey("[dbo].[TbKecamatan]", "Id"), LeftJoin("jIdKecamatan"), TextualField("IdKecamatanKodeKecamatan"), LookupInclude]
        public Int32? IdKecamatan
        {
            get { return Fields.IdKecamatan[this]; }
            set { Fields.IdKecamatan[this] = value; }
        }

        [DisplayName("Kode Kelurahan"), Size(20), NotNull, QuickSearch, LookupInclude]
        public String KodeKelurahan
        {
            get { return Fields.KodeKelurahan[this]; }
            set { Fields.KodeKelurahan[this] = value; }
        }

        [DisplayName("Nama Kelurahan"), Size(200), NotNull, LookupInclude]
        public String NamaKelurahan
        {
            get { return Fields.NamaKelurahan[this]; }
            set { Fields.NamaKelurahan[this] = value; }
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

        [DisplayName("Id Kecamatan Id Kota"), Expression("jIdKecamatan.[IdKota]")]
        public Int32? IdKecamatanIdKota
        {
            get { return Fields.IdKecamatanIdKota[this]; }
            set { Fields.IdKecamatanIdKota[this] = value; }
        }

        [DisplayName("Id Kecamatan Kode Kecamatan"), Expression("jIdKecamatan.[KodeKecamatan]")]
        public String IdKecamatanKodeKecamatan
        {
            get { return Fields.IdKecamatanKodeKecamatan[this]; }
            set { Fields.IdKecamatanKodeKecamatan[this] = value; }
        }

        [DisplayName("Nama Kecamatan"), Expression("jIdKecamatan.[NamaKecamatan]")]
        public String IdKecamatanNamaKecamatan
        {
            get { return Fields.IdKecamatanNamaKecamatan[this]; }
            set { Fields.IdKecamatanNamaKecamatan[this] = value; }
        }

        [DisplayName("Id Kecamatan Dibuat Oleh"), Expression("jIdKecamatan.[DibuatOleh]")]
        public String IdKecamatanDibuatOleh
        {
            get { return Fields.IdKecamatanDibuatOleh[this]; }
            set { Fields.IdKecamatanDibuatOleh[this] = value; }
        }

        [DisplayName("Id Kecamatan Dibuat Tanggal"), Expression("jIdKecamatan.[DibuatTanggal]")]
        public DateTime? IdKecamatanDibuatTanggal
        {
            get { return Fields.IdKecamatanDibuatTanggal[this]; }
            set { Fields.IdKecamatanDibuatTanggal[this] = value; }
        }

        [DisplayName("Id Kecamatan Diedit Oleh"), Expression("jIdKecamatan.[DieditOleh]")]
        public String IdKecamatanDieditOleh
        {
            get { return Fields.IdKecamatanDieditOleh[this]; }
            set { Fields.IdKecamatanDieditOleh[this] = value; }
        }

        [DisplayName("Id Kecamatan Diedit Tanggal"), Expression("jIdKecamatan.[DieditTanggal]")]
        public DateTime? IdKecamatanDieditTanggal
        {
            get { return Fields.IdKecamatanDieditTanggal[this]; }
            set { Fields.IdKecamatanDieditTanggal[this] = value; }
        }

        [DisplayName("Id Kecamatan System Status"), Expression("jIdKecamatan.[SystemStatus]")]
        public Boolean? IdKecamatanSystemStatus
        {
            get { return Fields.IdKecamatanSystemStatus[this]; }
            set { Fields.IdKecamatanSystemStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.KodeKelurahan; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbKelurahanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdKecamatan;
            public StringField KodeKelurahan;
            public StringField NamaKelurahan;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;

            public Int32Field IdKecamatanIdKota;
            public StringField IdKecamatanKodeKecamatan;
            public StringField IdKecamatanNamaKecamatan;
            public StringField IdKecamatanDibuatOleh;
            public DateTimeField IdKecamatanDibuatTanggal;
            public StringField IdKecamatanDieditOleh;
            public DateTimeField IdKecamatanDieditTanggal;
            public BooleanField IdKecamatanSystemStatus;
        }
    }
}
