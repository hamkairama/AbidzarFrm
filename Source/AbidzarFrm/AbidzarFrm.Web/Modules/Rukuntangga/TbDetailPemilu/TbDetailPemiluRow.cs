
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

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbDetailPemilu]")]
    [DisplayName("Detail Pemilu"), InstanceName("Detail Pemilu")]
    [ReadPermission("Questioner", "Pemilu", "View")]
    [ModifyPermission("Questioner", "Pemilu", "Modify")]
    [InsertPermission("Questioner", "Pemilu", "Insert")]
    [DeletePermission("Questioner", "Pemilu", "Delete")]
    public sealed class TbDetailPemiluRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Pemilu"), NotNull, ForeignKey("[dbo].[TbPemilu]", "Id"), LeftJoin("jIdPemilu"), TextualField("IdPemiluJudul")]
        public Int32? IdPemilu
        {
            get { return Fields.IdPemilu[this]; }
            set { Fields.IdPemilu[this] = value; }
        }

        [DisplayName("No Urut"), NotNull]
        public Int32? NoUrut
        {
            get { return Fields.NoUrut[this]; }
            set { Fields.NoUrut[this] = value; }
        }

        [DisplayName("Kandidat"), Size(100), NotNull, QuickSearch]
        public String Kandidat
        {
            get { return Fields.Kandidat[this]; }
            set { Fields.Kandidat[this] = value; }
        }

        [DisplayName("Deskripsi"), Size(4000)]
        public String Deskripsi
        {
            get { return Fields.Deskripsi[this]; }
            set { Fields.Deskripsi[this] = value; }
        }

        [DisplayName("File Name"), Size(500)]
        [ImageUploadEditor(FilenameFormat = "DetailPemilu/~", CopyToHistory = true)]
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

        [DisplayName("Id Pemilu Judul"), Expression("jIdPemilu.[Judul]")]
        public String IdPemiluJudul
        {
            get { return Fields.IdPemiluJudul[this]; }
            set { Fields.IdPemiluJudul[this] = value; }
        }

        [DisplayName("Id Pemilu File Name"), Expression("jIdPemilu.[FileName]")]
        public String IdPemiluFileName
        {
            get { return Fields.IdPemiluFileName[this]; }
            set { Fields.IdPemiluFileName[this] = value; }
        }

        [DisplayName("Id Pemilu Dibuat Oleh"), Expression("jIdPemilu.[DibuatOleh]")]
        public String IdPemiluDibuatOleh
        {
            get { return Fields.IdPemiluDibuatOleh[this]; }
            set { Fields.IdPemiluDibuatOleh[this] = value; }
        }

        [DisplayName("Id Pemilu Dibuat Tanggal"), Expression("jIdPemilu.[DibuatTanggal]")]
        public DateTime? IdPemiluDibuatTanggal
        {
            get { return Fields.IdPemiluDibuatTanggal[this]; }
            set { Fields.IdPemiluDibuatTanggal[this] = value; }
        }

        [DisplayName("Id Pemilu Diedit Oleh"), Expression("jIdPemilu.[DieditOleh]")]
        public String IdPemiluDieditOleh
        {
            get { return Fields.IdPemiluDieditOleh[this]; }
            set { Fields.IdPemiluDieditOleh[this] = value; }
        }

        [DisplayName("Id Pemilu Diedit Tanggal"), Expression("jIdPemilu.[DieditTanggal]")]
        public DateTime? IdPemiluDieditTanggal
        {
            get { return Fields.IdPemiluDieditTanggal[this]; }
            set { Fields.IdPemiluDieditTanggal[this] = value; }
        }

        [DisplayName("Id Pemilu System Status"), Expression("jIdPemilu.[SystemStatus]")]
        public Boolean? IdPemiluSystemStatus
        {
            get { return Fields.IdPemiluSystemStatus[this]; }
            set { Fields.IdPemiluSystemStatus[this] = value; }
        }

        [DisplayName("Id Pemilu Kode Rt"), Expression("jIdPemilu.[KodeRt]")]
        public String IdPemiluKodeRt
        {
            get { return Fields.IdPemiluKodeRt[this]; }
            set { Fields.IdPemiluKodeRt[this] = value; }
        }

        //[DisplayName("Polling Pemilu"), MasterDetailRelation(foreignKey: "IdDetailPemilu"), NotMapped]
        //public List<TbPollingPemiluRow> tbPollingPemiluRow
        //{
        //    get { return Fields.tbPollingPemiluRow[this]; }
        //    set { Fields.tbPollingPemiluRow[this] = value; }
        //}

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Kandidat; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbDetailPemiluRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdPemilu;
            public Int32Field NoUrut;
            public StringField Kandidat;
            public StringField FileName;
            public StringField Deskripsi;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;

            public StringField IdPemiluJudul;
            public StringField IdPemiluFileName;
            public StringField IdPemiluDibuatOleh;
            public DateTimeField IdPemiluDibuatTanggal;
            public StringField IdPemiluDieditOleh;
            public DateTimeField IdPemiluDieditTanggal;
            public BooleanField IdPemiluSystemStatus;
            public StringField IdPemiluKodeRt;
            //relationship
            //public RowListField<TbPollingPemiluRow> tbPollingPemiluRow;
        }
    }
}
