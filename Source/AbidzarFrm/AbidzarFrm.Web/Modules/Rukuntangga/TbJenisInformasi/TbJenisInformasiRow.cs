
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

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbJenisInformasi]")]
    [DisplayName("Jenis Informasi"), InstanceName("Jenis Informasi")]
    [ReadPermission("Informasi", "View")]
    [ModifyPermission("Informasi", "Modify")]
    [InsertPermission("Informasi", "Insert")]
    [DeletePermission("Informasi", "Delete")]
    public sealed class TbJenisInformasiRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Jenis Informasi"), Size(20), NotNull, QuickSearch]
        public String JenisInformasi
        {
            get { return Fields.JenisInformasi[this]; }
            set { Fields.JenisInformasi[this] = value; }
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

        [DisplayName("Detail Jenis Informasi"), MasterDetailRelation(foreignKey: "IdJenisInformasi"), NotMapped]
        public List<TbDetailJenisInformasiRow> tbDetailJenisInformasiRow
        {
            get { return Fields.tbDetailJenisInformasiRow[this]; }
            set { Fields.tbDetailJenisInformasiRow[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.JenisInformasi; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbJenisInformasiRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField JenisInformasi;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;
            public StringField KodeRt;

            //relationship
            public RowListField<TbDetailJenisInformasiRow> tbDetailJenisInformasiRow;
        }
    }
}
