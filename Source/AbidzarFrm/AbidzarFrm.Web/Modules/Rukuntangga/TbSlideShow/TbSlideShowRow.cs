
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbSlideShow]")]
    [DisplayName("Slide Show"), InstanceName("Slide Show")]
    [ReadPermission("Master", "Slideshow", "View")]
    [ModifyPermission("Master", "Slideshow", "Modify")]
    [InsertPermission("Master", "Slideshow", "Insert")]
    [DeletePermission("Master", "Slidesho", "Delete")]
    public sealed class TbSlideShowRow : Row, IIdRow, INameRow
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

        [DisplayName("Deskripsi"), Size(400)]
        public String Deskripsi
        {
            get { return Fields.Deskripsi[this]; }
            set { Fields.Deskripsi[this] = value; }
        }

        [DisplayName("File Name"), Size(500)]
        [ImageUploadEditor(FilenameFormat = "|KodeRt|/Slideshow/~", CopyToHistory = false)]
        public String FileName
        {
            get { return Fields.FileName[this]; }
            set { Fields.FileName[this] = value; }
        }

        [DisplayName("Tipe"), NotNull]
        public Int32? Tipe
        {
            get { return Fields.Tipe[this]; }
            set { Fields.Tipe[this] = value; }
        }

        [DisplayName("Posisi")]
        public Int32? Posisi
        {
            get { return Fields.Posisi[this]; }
            set { Fields.Posisi[this] = value; }
        }

        [DisplayName("Path Url"), Size(400)]
        public String PathUrl
        {
            get { return Fields.PathUrl[this]; }
            set { Fields.PathUrl[this] = value; }
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
            get { return Fields.Judul; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbSlideShowRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Judul;
            public StringField Deskripsi;
            public StringField FileName;
            public Int32Field Tipe;
            public Int32Field Posisi;
            public StringField PathUrl;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;
            public StringField KodeRt;
        }
    }
}
