
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbTanyaRtDetail]")]
    [DisplayName("Tanya Rt Detail"), InstanceName("Tanya Rt Detail")]
    [ReadPermission("Master", "TanyaRt", "View")]
    [ModifyPermission("Master", "TanyaRt", "Modify")]
    [InsertPermission("Master", "TanyaRt", "Insert")]
    [DeletePermission("Master", "TanyaRt", "Delete")]
    public sealed class TbTanyaRtDetailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, LookupInclude]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Tanya Rt"), LookupInclude, NotNull, ForeignKey("[dbo].[TbTanyaRt]", "Id"), LeftJoin("jIdTanyaRt"), TextualField("IdTanyaRtJudul")]
        public Int32? IdTanyaRt
        {
            get { return Fields.IdTanyaRt[this]; }
            set { Fields.IdTanyaRt[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(2147483647), NotNull, QuickSearch, LookupInclude]
        public String Deskripsi
        {
            get { return Fields.Deskripsi[this]; }
            set { Fields.Deskripsi[this] = value; }
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

        [DisplayName("Id Tanya Rt Judul"), Expression("jIdTanyaRt.[Judul]")]
        public String IdTanyaRtJudul
        {
            get { return Fields.IdTanyaRtJudul[this]; }
            set { Fields.IdTanyaRtJudul[this] = value; }
        }

        [DisplayName("Id Tanya Rt Dibuat Oleh"), Expression("jIdTanyaRt.[DibuatOleh]")]
        public String IdTanyaRtDibuatOleh
        {
            get { return Fields.IdTanyaRtDibuatOleh[this]; }
            set { Fields.IdTanyaRtDibuatOleh[this] = value; }
        }

        [DisplayName("Id Tanya Rt Dibuat Tanggal"), Expression("jIdTanyaRt.[DibuatTanggal]")]
        public DateTime? IdTanyaRtDibuatTanggal
        {
            get { return Fields.IdTanyaRtDibuatTanggal[this]; }
            set { Fields.IdTanyaRtDibuatTanggal[this] = value; }
        }

        [DisplayName("Id Tanya Rt Diedit Oleh"), Expression("jIdTanyaRt.[DieditOleh]")]
        public String IdTanyaRtDieditOleh
        {
            get { return Fields.IdTanyaRtDieditOleh[this]; }
            set { Fields.IdTanyaRtDieditOleh[this] = value; }
        }

        [DisplayName("Id Tanya Rt Diedit Tanggal"), Expression("jIdTanyaRt.[DieditTanggal]")]
        public DateTime? IdTanyaRtDieditTanggal
        {
            get { return Fields.IdTanyaRtDieditTanggal[this]; }
            set { Fields.IdTanyaRtDieditTanggal[this] = value; }
        }

        [DisplayName("Id Tanya Rt System Status"), Expression("jIdTanyaRt.[SystemStatus]")]
        public Boolean? IdTanyaRtSystemStatus
        {
            get { return Fields.IdTanyaRtSystemStatus[this]; }
            set { Fields.IdTanyaRtSystemStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Deskripsi; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbTanyaRtDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdTanyaRt;
            public StringField Deskripsi;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;

            public StringField IdTanyaRtJudul;
            public StringField IdTanyaRtDibuatOleh;
            public DateTimeField IdTanyaRtDibuatTanggal;
            public StringField IdTanyaRtDieditOleh;
            public DateTimeField IdTanyaRtDieditTanggal;
            public BooleanField IdTanyaRtSystemStatus;
        }
    }
}
