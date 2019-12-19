
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbKota]")]
    [DisplayName("Kota"), InstanceName("Kota")]
    [ReadPermission("Master", "Kota", "View")]
    [ModifyPermission("Master", "Kota", "Modify")]
    [InsertPermission("Master", "Kota", "Insert")]
    [DeletePermission("Master", "Kota", "Delete")]
    [LookupScript("Rukuntangga.Kota", Permission = "*")]
    public sealed class TbKotaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, LookupInclude]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Provinsi"), NotNull, ForeignKey("[dbo].[TbProvinsi]", "Id"), LeftJoin("jIdProvinsi"), TextualField("IdProvinsiKodeProvinsi"), LookupInclude]
        public Int32? IdProvinsi
        {
            get { return Fields.IdProvinsi[this]; }
            set { Fields.IdProvinsi[this] = value; }
        }

        [DisplayName("Kode Kota"), Size(20), NotNull, QuickSearch, LookupInclude]
        public String KodeKota
        {
            get { return Fields.KodeKota[this]; }
            set { Fields.KodeKota[this] = value; }
        }

        [DisplayName("Nama Kota"), Size(200), NotNull, LookupInclude]
        public String NamaKota
        {
            get { return Fields.NamaKota[this]; }
            set { Fields.NamaKota[this] = value; }
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

        [DisplayName("Id Provinsi Kode Provinsi"), Expression("jIdProvinsi.[KodeProvinsi]")]
        public String IdProvinsiKodeProvinsi
        {
            get { return Fields.IdProvinsiKodeProvinsi[this]; }
            set { Fields.IdProvinsiKodeProvinsi[this] = value; }
        }

        [DisplayName("Nama Provinsi"), Expression("jIdProvinsi.[NamaProvinsi]")]
        public String IdProvinsiNamaProvinsi
        {
            get { return Fields.IdProvinsiNamaProvinsi[this]; }
            set { Fields.IdProvinsiNamaProvinsi[this] = value; }
        }

        [DisplayName("Id Provinsi Dibuat Oleh"), Expression("jIdProvinsi.[DibuatOleh]")]
        public String IdProvinsiDibuatOleh
        {
            get { return Fields.IdProvinsiDibuatOleh[this]; }
            set { Fields.IdProvinsiDibuatOleh[this] = value; }
        }

        [DisplayName("Id Provinsi Dibuat Tanggal"), Expression("jIdProvinsi.[DibuatTanggal]")]
        public DateTime? IdProvinsiDibuatTanggal
        {
            get { return Fields.IdProvinsiDibuatTanggal[this]; }
            set { Fields.IdProvinsiDibuatTanggal[this] = value; }
        }

        [DisplayName("Id Provinsi Diedit Oleh"), Expression("jIdProvinsi.[DieditOleh]")]
        public String IdProvinsiDieditOleh
        {
            get { return Fields.IdProvinsiDieditOleh[this]; }
            set { Fields.IdProvinsiDieditOleh[this] = value; }
        }

        [DisplayName("Id Provinsi Diedit Tanggal"), Expression("jIdProvinsi.[DieditTanggal]")]
        public DateTime? IdProvinsiDieditTanggal
        {
            get { return Fields.IdProvinsiDieditTanggal[this]; }
            set { Fields.IdProvinsiDieditTanggal[this] = value; }
        }

        [DisplayName("Id Provinsi System Status"), Expression("jIdProvinsi.[SystemStatus]")]
        public Boolean? IdProvinsiSystemStatus
        {
            get { return Fields.IdProvinsiSystemStatus[this]; }
            set { Fields.IdProvinsiSystemStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.KodeKota; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbKotaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdProvinsi;
            public StringField KodeKota;
            public StringField NamaKota;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;

            public StringField IdProvinsiKodeProvinsi;
            public StringField IdProvinsiNamaProvinsi;
            public StringField IdProvinsiDibuatOleh;
            public DateTimeField IdProvinsiDibuatTanggal;
            public StringField IdProvinsiDieditOleh;
            public DateTimeField IdProvinsiDieditTanggal;
            public BooleanField IdProvinsiSystemStatus;
        }
    }
}
