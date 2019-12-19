
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbMailLog]")]
    [DisplayName("Mail Log"), InstanceName("Mail Log")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class TbMailLogRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Subject"), Size(500), NotNull, QuickSearch]
        public String Subject
        {
            get { return Fields.Subject[this]; }
            set { Fields.Subject[this] = value; }
        }

        [DisplayName("Body"), NotNull]
        public String Body
        {
            get { return Fields.Body[this]; }
            set { Fields.Body[this] = value; }
        }

        [DisplayName("From"), Size(100)]
        public String From
        {
            get { return Fields.From[this]; }
            set { Fields.From[this] = value; }
        }

        [DisplayName("To"), Size(500)]
        public String To
        {
            get { return Fields.To[this]; }
            set { Fields.To[this] = value; }
        }

        [DisplayName("Cc"), Size(500)]
        public String Cc
        {
            get { return Fields.Cc[this]; }
            set { Fields.Cc[this] = value; }
        }

        [DisplayName("Status")]
        public Boolean? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Error Message")]
        public String ErrorMessage
        {
            get { return Fields.ErrorMessage[this]; }
            set { Fields.ErrorMessage[this] = value; }
        }

        [DisplayName("Dibuat Oleh")]
        public String DibuatOleh
        {
            get { return Fields.DibuatOleh[this]; }
            set { Fields.DibuatOleh[this] = value; }
        }

        [DisplayName("Dibuat Tanggal")]
        public DateTime? DibuatTanggal
        {
            get { return Fields.DibuatTanggal[this]; }
            set { Fields.DibuatTanggal[this] = value; }
        }

        [DisplayName("Diedit Oleh")]
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

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Subject; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbMailLogRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Subject;
            public StringField Body;
            public StringField From;
            public StringField To;
            public StringField Cc;
            public BooleanField Status;
            public StringField ErrorMessage;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
        }
    }
}
