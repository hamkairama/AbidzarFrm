
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

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbJenisKegiatan]")]
    [DisplayName("Jenis Kegiatan"), InstanceName("Jenis Kegiatan")]
    [ReadPermission("Kegiatan", "View")]
    [ModifyPermission("Kegiatan", "Modify")]
    [InsertPermission("Kegiatan", "Insert")]
    [DeletePermission("Kegiatan", "Delete")]
    public sealed class TbJenisKegiatanRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Jenis Kegiatan"), Size(20), NotNull, QuickSearch]
        public String JenisKegiatan
        {
            get { return Fields.JenisKegiatan[this]; }
            set { Fields.JenisKegiatan[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(100)]
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

        [DisplayName("Kode Rt"), Size(20)]
        public String KodeRt
        {
            get { return Fields.KodeRt[this]; }
            set { Fields.KodeRt[this] = value; }
        }

        [DisplayName("Detail Jenis Kegiatan"), MasterDetailRelation(foreignKey: "IdJenisKegiatan"), NotMapped]
        public List<TbDetailJenisKegiatanRow> tbDetailJenisKegiatanRow
        {
            get { return Fields.tbDetailJenisKegiatanRow[this]; }
            set { Fields.tbDetailJenisKegiatanRow[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.JenisKegiatan; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbJenisKegiatanRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField JenisKegiatan;
            public StringField Deskripsi;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;
            public StringField KodeRt;

            //relationship
            public RowListField<TbDetailJenisKegiatanRow> tbDetailJenisKegiatanRow;
        }
    }
}
