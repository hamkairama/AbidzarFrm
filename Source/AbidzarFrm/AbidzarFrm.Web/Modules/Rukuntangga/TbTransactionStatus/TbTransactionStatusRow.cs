
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbTransactionStatus]")]
    [DisplayName("Transaction Status"), InstanceName("Transaction Status")]
    [ReadPermission("Security:TransactionStatus")]
    [ModifyPermission("Security:TransactionStatus")]
    [LookupScript("Rukuntangga.TransactionStatus", Permission = "*")]
    public sealed class TbTransactionStatusRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Document Code"), Size(3), NotNull, QuickSearch, LookupInclude]
        public String DocumentCode
        {
            get { return Fields.DocumentCode[this]; }
            set { Fields.DocumentCode[this] = value; }
        }

        [DisplayName("Code"), Size(20), NotNull, LookupInclude]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Internal"), Size(50), NotNull, LookupInclude]
        public String Internal
        {
            get { return Fields.Internal[this]; }
            set { Fields.Internal[this] = value; }
        }

        [DisplayName("External"), Size(50), NotNull, LookupInclude]
        public String External
        {
            get { return Fields.External[this]; }
            set { Fields.External[this] = value; }
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

        [DisplayName("Icon"), Size(100), LookupInclude]
        public String Icon
        {
            get { return Fields.Icon[this]; }
            set { Fields.Icon[this] = value; }
        }

        [DisplayName("Label"), Size(100), LookupInclude]
        public String Label
        {
            get { return Fields.Label[this]; }
            set { Fields.Label[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DocumentCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbTransactionStatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField DocumentCode;
            public StringField Code;
            public StringField Internal;
            public StringField External;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public StringField Icon;
            public StringField Label;
        }
    }
}
