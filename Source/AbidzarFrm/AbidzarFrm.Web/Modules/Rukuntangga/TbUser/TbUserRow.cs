
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbUser]")]
    [DisplayName("User"), InstanceName("User")]
    [ReadPermission("Security:User")]
    [ModifyPermission("Security:User")]
    public sealed class TbUserRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Nik"), Size(16), PrimaryKey, QuickSearch]
        public String Nik
        {
            get { return Fields.Nik[this]; }
            set { Fields.Nik[this] = value; }
        }

        [DisplayName("Sandi"), NotNull]
        public String Sandi
        {
            get { return Fields.Sandi[this]; }
            set { Fields.Sandi[this] = value; }
        }

        [DisplayName("Email"), Size(200), PrimaryKey]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Status"), NotNull]
        public Boolean? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Kode Verifikasi"), NotNull]
        public Guid? KodeVerifikasi
        {
            get { return Fields.KodeVerifikasi[this]; }
            set { Fields.KodeVerifikasi[this] = value; }
        }

        [DisplayName("Is Mobile"), NotNull]
        public Boolean? IsMobile
        {
            get { return Fields.IsMobile[this]; }
            set { Fields.IsMobile[this] = value; }
        }

        [DisplayName("Id Role"), Size(20)]
        public String IdRole
        {
            get { return Fields.IdRole[this]; }
            set { Fields.IdRole[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nik; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbUserRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Nik;
            public StringField Sandi;
            public StringField Email;
            public BooleanField Status;
            public GuidField KodeVerifikasi;
            public BooleanField IsMobile;
            public StringField IdRole;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;
        }
    }
}
