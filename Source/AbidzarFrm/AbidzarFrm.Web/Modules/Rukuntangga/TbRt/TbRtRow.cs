
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbRt]")]
    [DisplayName("Rt"), InstanceName("Rt")]
    [ReadPermission("Master", "Rt", "View")]
    [ModifyPermission("Master", "Rt", "Modify")]
    [InsertPermission("Master", "Rt", "Insert")]
    [DeletePermission("Master", "Rt", "Delete")]
    [LookupScript(Permission = "*")]
    public sealed class TbRtRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Rw"), NotNull, ForeignKey("[dbo].[TbRw]", "Id"), LeftJoin("jIdRw"), TextualField("IdRwNamaRw"), LookupInclude]
        public Int32? IdRw
        {
            get { return Fields.IdRw[this]; }
            set { Fields.IdRw[this] = value; }
        }

        [DisplayName("Kode Rt"), Size(20), NotNull, QuickSearch]
        public String KodeRt
        {
            get { return Fields.KodeRt[this]; }
            set { Fields.KodeRt[this] = value; }
        }

        [DisplayName("No Rt"), Size(5)]
        public String NoRt
        {
            get { return Fields.NoRt[this]; }
            set { Fields.NoRt[this] = value; }
        }

        [DisplayName("Nik"), Size(16)]
        public String Nik
        {
            get { return Fields.Nik[this]; }
            set { Fields.Nik[this] = value; }
        }

        [DisplayName("Nama Rt"), Size(100), NotNull]
        public String NamaRt
        {
            get { return Fields.NamaRt[this]; }
            set { Fields.NamaRt[this] = value; }
        }

        [DisplayName("Kode Login"), Size(20), NotNull]
        public String KodeLogin
        {
            get { return Fields.KodeLogin[this]; }
            set { Fields.KodeLogin[this] = value; }
        }

        [DisplayName("Photo")]
        [ImageUploadEditor(FilenameFormat = "|KodeRt|/Rt/~", CopyToHistory = false)]
        public String Photo
        {
            get { return Fields.Photo[this]; }
            set { Fields.Photo[this] = value; }
        }

        [DisplayName("Deskripsi")]
        public String Deskripsi
        {
            get { return Fields.Deskripsi[this]; }
            set { Fields.Deskripsi[this] = value; }
        }

        [DisplayName("Quotes")]
        public String Quotes
        {
            get { return Fields.Quotes[this]; }
            set { Fields.Quotes[this] = value; }
        }

        [DisplayName("Visi")]
        public String Visi
        {
            get { return Fields.Visi[this]; }
            set { Fields.Visi[this] = value; }
        }

        [DisplayName("Misi")]
        public String Misi
        {
            get { return Fields.Misi[this]; }
            set { Fields.Misi[this] = value; }
        }

        [DisplayName("Facebook"), Size(100)]
        public String Facebook
        {
            get { return Fields.Facebook[this]; }
            set { Fields.Facebook[this] = value; }
        }

        [DisplayName("Twitter"), Size(100)]
        public String Twitter
        {
            get { return Fields.Twitter[this]; }
            set { Fields.Twitter[this] = value; }
        }

        [DisplayName("Instagram"), Size(100)]
        public String Instagram
        {
            get { return Fields.Instagram[this]; }
            set { Fields.Instagram[this] = value; }
        }

        [DisplayName("Whatsapp"), Size(100)]
        public String Whatsapp
        {
            get { return Fields.Whatsapp[this]; }
            set { Fields.Whatsapp[this] = value; }
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

        [DisplayName("Kode Rw"), Expression("jIdRw.[KodeRw]")]
        public String IdRwKodeRw
        {
            get { return Fields.IdRwKodeRw[this]; }
            set { Fields.IdRwKodeRw[this] = value; }
        }

        [DisplayName("Nama Rw"), Expression("jIdRw.[NamaRw]")]
        public String IdRwNamaRw
        {
            get { return Fields.IdRwNamaRw[this]; }
            set { Fields.IdRwNamaRw[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.KodeRt; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbRtRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdRw;
            public StringField KodeRt;
            public StringField NoRt;
            public StringField Nik;
            public StringField NamaRt;
            public StringField KodeLogin;
            public StringField Photo;
            public StringField Deskripsi;
            public StringField Quotes;
            public StringField Visi;
            public StringField Misi;
            public StringField Facebook;
            public StringField Twitter;
            public StringField Instagram;
            public StringField Whatsapp;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;


            public StringField IdRwKodeRw;
            public StringField IdRwNamaRw;
        }
    }
}
