
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbTransactionFlow]")]
    [DisplayName("Transaction Flow"), InstanceName("Transaction Flow")]
    [ReadPermission("Security:Flow")]
    [ModifyPermission("Security:Flow")]
    public sealed class TbTransactionFlowRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Document Code"), Size(3), NotNull, QuickSearch]
        public String DocumentCode
        {
            get { return Fields.DocumentCode[this]; }
            set { Fields.DocumentCode[this] = value; }
        }

        [DisplayName("Code"), Size(10), NotNull]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Boolean? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Description"), Size(200)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
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


        [DisplayName("Transaction Flow Detail"), MasterDetailRelation(foreignKey: "TransactionFlowId"), NotMapped]
        public List<TbTransactionFlowDetailRow> tbTransactionFlowDetailRow
        {
            get { return Fields.tbTransactionFlowDetailRow[this]; }
            set { Fields.tbTransactionFlowDetailRow[this] = value; }
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

        public TbTransactionFlowRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField DocumentCode;
            public StringField Code;
            public BooleanField IsActive;
            public StringField Description;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;

            //relationship
            public RowListField<TbTransactionFlowDetailRow> tbTransactionFlowDetailRow;
        }
    }
}
