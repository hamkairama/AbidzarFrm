
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbKecamatan]")]
    [DisplayName("Kecamatan"), InstanceName("Kecamatan")]
    [ReadPermission("Master", "Kecamatan", "View")]
    [ModifyPermission("Master", "Kecamatan", "Modify")]
    [InsertPermission("Master", "Kecamatan", "Insert")]
    [DeletePermission("Master", "Kecamatan", "Delete")]
    [LookupScript("Rukuntangga.Kecamatan", Permission = "*")]
    public sealed class TbKecamatanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, LookupInclude]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Kota"), NotNull, ForeignKey("[dbo].[TbKota]", "Id"), LeftJoin("jIdKota"), TextualField("IdKotaKodeKota"), LookupInclude]
        public Int32? IdKota
        {
            get { return Fields.IdKota[this]; }
            set { Fields.IdKota[this] = value; }
        }

        [DisplayName("Kode Kecamatan"), Size(20), NotNull, QuickSearch, LookupInclude]
        public String KodeKecamatan
        {
            get { return Fields.KodeKecamatan[this]; }
            set { Fields.KodeKecamatan[this] = value; }
        }

        [DisplayName("Nama Kecamatan"), Size(200), NotNull, LookupInclude]
        public String NamaKecamatan
        {
            get { return Fields.NamaKecamatan[this]; }
            set { Fields.NamaKecamatan[this] = value; }
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

        [DisplayName("Id Kota Id Provinsi"), Expression("jIdKota.[IdProvinsi]")]
        public Int32? IdKotaIdProvinsi
        {
            get { return Fields.IdKotaIdProvinsi[this]; }
            set { Fields.IdKotaIdProvinsi[this] = value; }
        }

        [DisplayName("Id Kota Kode Kota"), Expression("jIdKota.[KodeKota]")]
        public String IdKotaKodeKota
        {
            get { return Fields.IdKotaKodeKota[this]; }
            set { Fields.IdKotaKodeKota[this] = value; }
        }

        [DisplayName("Nama Kota"), Expression("jIdKota.[NamaKota]")]
        public String IdKotaNamaKota
        {
            get { return Fields.IdKotaNamaKota[this]; }
            set { Fields.IdKotaNamaKota[this] = value; }
        }

        [DisplayName("Id Kota Dibuat Oleh"), Expression("jIdKota.[DibuatOleh]")]
        public String IdKotaDibuatOleh
        {
            get { return Fields.IdKotaDibuatOleh[this]; }
            set { Fields.IdKotaDibuatOleh[this] = value; }
        }

        [DisplayName("Id Kota Dibuat Tanggal"), Expression("jIdKota.[DibuatTanggal]")]
        public DateTime? IdKotaDibuatTanggal
        {
            get { return Fields.IdKotaDibuatTanggal[this]; }
            set { Fields.IdKotaDibuatTanggal[this] = value; }
        }

        [DisplayName("Id Kota Diedit Oleh"), Expression("jIdKota.[DieditOleh]")]
        public String IdKotaDieditOleh
        {
            get { return Fields.IdKotaDieditOleh[this]; }
            set { Fields.IdKotaDieditOleh[this] = value; }
        }

        [DisplayName("Id Kota Diedit Tanggal"), Expression("jIdKota.[DieditTanggal]")]
        public DateTime? IdKotaDieditTanggal
        {
            get { return Fields.IdKotaDieditTanggal[this]; }
            set { Fields.IdKotaDieditTanggal[this] = value; }
        }

        [DisplayName("Id Kota System Status"), Expression("jIdKota.[SystemStatus]")]
        public Boolean? IdKotaSystemStatus
        {
            get { return Fields.IdKotaSystemStatus[this]; }
            set { Fields.IdKotaSystemStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.KodeKecamatan; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbKecamatanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdKota;
            public StringField KodeKecamatan;
            public StringField NamaKecamatan;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;

            public Int32Field IdKotaIdProvinsi;
            public StringField IdKotaKodeKota;
            public StringField IdKotaNamaKota;
            public StringField IdKotaDibuatOleh;
            public DateTimeField IdKotaDibuatTanggal;
            public StringField IdKotaDieditOleh;
            public DateTimeField IdKotaDieditTanggal;
            public BooleanField IdKotaSystemStatus;
        }
    }
}
