
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbErrorLogs]")]
    [DisplayName("Tb Error Logs"), InstanceName("Tb Error Logs")]
    [ReadPermission("Security:ErrorLog")]
    [ModifyPermission("Security:ErrorLog")]
    public sealed class TbErrorLogsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Err Number"), Column("ERR_NUMBER")]
        public Double? ErrNumber
        {
            get { return Fields.ErrNumber[this]; }
            set { Fields.ErrNumber[this] = value; }
        }

        [DisplayName("Err Severity"), Column("ERR_SEVERITY"), Size(100), QuickSearch]
        public String ErrSeverity
        {
            get { return Fields.ErrSeverity[this]; }
            set { Fields.ErrSeverity[this] = value; }
        }

        [DisplayName("Err Stat"), Column("ERR_STAT"), Size(100)]
        public String ErrStat
        {
            get { return Fields.ErrStat[this]; }
            set { Fields.ErrStat[this] = value; }
        }

        [DisplayName("Err Procedure"), Column("ERR_PROCEDURE"), Size(100)]
        public String ErrProcedure
        {
            get { return Fields.ErrProcedure[this]; }
            set { Fields.ErrProcedure[this] = value; }
        }

        [DisplayName("Err Line"), Column("ERR_LINE"), Size(100)]
        public String ErrLine
        {
            get { return Fields.ErrLine[this]; }
            set { Fields.ErrLine[this] = value; }
        }

        [DisplayName("Err Message"), Column("ERR_MESSAGE"), Size(1000)]
        public String ErrMessage
        {
            get { return Fields.ErrMessage[this]; }
            set { Fields.ErrMessage[this] = value; }
        }

        [DisplayName("Created By"), Column("CREATED_BY"), Size(15)]
        public String CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Created Date"), Column("CREATED_DATE")]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ErrNumber; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ErrSeverity; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbErrorLogsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public DoubleField ErrNumber;
            public StringField ErrSeverity;
            public StringField ErrStat;
            public StringField ErrProcedure;
            public StringField ErrLine;
            public StringField ErrMessage;
            public StringField CreatedBy;
            public DateTimeField CreatedDate;
        }
    }
}
