
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[AppointmentDiary]")]
    [DisplayName("Appointment Diary"), InstanceName("Appointment Diary")]
    [ReadPermission("Master", "Appointment", "View")]
    [ModifyPermission("Master", "Appointment", "Modify")]
    [InsertPermission("Master", "Appointment", "Insert")]
    [DeletePermission("Master", "Appointment", "Delete")]
    public sealed class AppointmentDiaryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Title"), Size(100), NotNull, QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Some Important Key")]
        public Int32? SomeImportantKey
        {
            get { return Fields.SomeImportantKey[this]; }
            set { Fields.SomeImportantKey[this] = value; }
        }

        [DisplayName("Date Time Scheduled"), NotNull]
        public DateTime? DateTimeScheduled
        {
            get { return Fields.DateTimeScheduled[this]; }
            set { Fields.DateTimeScheduled[this] = value; }
        }

        [DisplayName("Appointment Length"), NotNull]
        public Int32? AppointmentLength
        {
            get { return Fields.AppointmentLength[this]; }
            set { Fields.AppointmentLength[this] = value; }
        }

        [DisplayName("Status Enum"), Column("StatusENUM"), NotNull]
        public Int32? StatusEnum
        {
            get { return Fields.StatusEnum[this]; }
            set { Fields.StatusEnum[this] = value; }
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

        [DisplayName("Kode Rt"), Size(20)]
        public String KodeRt
        {
            get { return Fields.KodeRt[this]; }
            set { Fields.KodeRt[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Title; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AppointmentDiaryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Title;
            public Int32Field SomeImportantKey;
            public DateTimeField DateTimeScheduled;
            public Int32Field AppointmentLength;
            public Int32Field StatusEnum;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;
            public StringField KodeRt;
        }
    }
}
