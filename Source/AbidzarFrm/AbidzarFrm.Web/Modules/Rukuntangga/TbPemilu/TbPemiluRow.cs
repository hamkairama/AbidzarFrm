
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

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbPemilu]")]
    [DisplayName("Pemilu"), InstanceName("Pemilu")]
    [ReadPermission("Questioner", "Pemilu", "View")]
    [ModifyPermission("Questioner", "Pemilu", "Modify")]
    [InsertPermission("Questioner", "Pemilu", "Insert")]
    [DeletePermission("Questioner", "Pemilu", "Delete")]
    public sealed class TbPemiluRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Judul"), Size(100), NotNull, QuickSearch]
        public String Judul
        {
            get { return Fields.Judul[this]; }
            set { Fields.Judul[this] = value; }
        }

        [DisplayName("Photo"), Size(500)]
        [ImageUploadEditor(FilenameFormat = "Questioner/|KodeRt|/|Judul|/{4}", CopyToHistory = false)]
        public String FileName
        {
            get { return Fields.FileName[this]; }
            set { Fields.FileName[this] = value; }
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

        [DisplayName("Detail Pemilu"), MasterDetailRelation(foreignKey: "IdPemilu"), NotMapped]
        public List<TbDetailPemiluRow> tbDetailPemiluRow
        {
            get { return Fields.tbDetailPemiluRow[this]; }
            set { Fields.tbDetailPemiluRow[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Judul; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbPemiluRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Judul;
            public StringField FileName;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;
            public StringField KodeRt;
            //relationship
            public RowListField<TbDetailPemiluRow> tbDetailPemiluRow;
        }
    }
}
