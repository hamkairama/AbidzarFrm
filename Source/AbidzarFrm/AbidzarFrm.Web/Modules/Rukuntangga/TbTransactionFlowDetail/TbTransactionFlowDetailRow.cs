
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbTransactionFlowDetail]")]
    [DisplayName("Tb Transaction Flow Detail"), InstanceName("Tb Transaction Flow Detail")]
    [ReadPermission("Security:Flow")]
    [ModifyPermission("Security:Flow")]
    public sealed class TbTransactionFlowDetailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Transaction Flow Id"), NotNull]
        public Int32? TransactionFlowId
        {
            get { return Fields.TransactionFlowId[this]; }
            set { Fields.TransactionFlowId[this] = value; }
        }

        [DisplayName("Transaction Status Code"), Size(20), NotNull, QuickSearch]
        public String TransactionStatusCode
        {
            get { return Fields.TransactionStatusCode[this]; }
            set { Fields.TransactionStatusCode[this] = value; }
        }

        [DisplayName("Name"), Size(20), NotNull]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Start Status")]
        public Int16? StartStatus
        {
            get { return Fields.StartStatus[this]; }
            set { Fields.StartStatus[this] = value; }
        }

        [DisplayName("Final Status")]
        public Int16? FinalStatus
        {
            get { return Fields.FinalStatus[this]; }
            set { Fields.FinalStatus[this] = value; }
        }

        [DisplayName("Access Button"), Size(200)]
        public String AccessButton
        {
            get { return Fields.AccessButton[this]; }
            set { Fields.AccessButton[this] = value; }
        }

        [DisplayName("Popup Message"), Size(500)]
        public String PopupMessage
        {
            get { return Fields.PopupMessage[this]; }
            set { Fields.PopupMessage[this] = value; }
        }

        [DisplayName("Next Status"), Size(20)]
        public String NextStatus
        {
            get { return Fields.NextStatus[this]; }
            set { Fields.NextStatus[this] = value; }
        }

        [DisplayName("Is Send Email")]
        public Int16? IsSendEmail
        {
            get { return Fields.IsSendEmail[this]; }
            set { Fields.IsSendEmail[this] = value; }
        }

        [DisplayName("Send Email Type"), Size(50)]
        public String SendEmailType
        {
            get { return Fields.SendEmailType[this]; }
            set { Fields.SendEmailType[this] = value; }
        }

        [DisplayName("Send Email To"), Size(500)]
        public String SendEmailTo
        {
            get { return Fields.SendEmailTo[this]; }
            set { Fields.SendEmailTo[this] = value; }
        }

        [DisplayName("Template Email Type"), Size(100)]
        public String TemplateEmailType
        {
            get { return Fields.TemplateEmailType[this]; }
            set { Fields.TemplateEmailType[this] = value; }
        }

        [DisplayName("Cc Requestor")]
        public Int16? CcRequestor
        {
            get { return Fields.CcRequestor[this]; }
            set { Fields.CcRequestor[this] = value; }
        }

        [DisplayName("Cc Creator")]
        public Int16? CcCreator
        {
            get { return Fields.CcCreator[this]; }
            set { Fields.CcCreator[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TransactionStatusCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbTransactionFlowDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field TransactionFlowId;
            public StringField TransactionStatusCode;
            public StringField Name;
            public Int16Field StartStatus;
            public Int16Field FinalStatus;
            public StringField AccessButton;
            public StringField PopupMessage;
            public StringField NextStatus;
            public Int16Field IsSendEmail;
            public StringField SendEmailType;
            public StringField SendEmailTo;
            public StringField TemplateEmailType;
            public Int16Field CcRequestor;
            public Int16Field CcCreator;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
        }
    }
}
