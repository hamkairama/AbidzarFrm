
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbGalery]")]
    [DisplayName("Galery"), InstanceName("Galery")]
    [ReadPermission("Master", "Galery", "View")]
    [ModifyPermission("Master", "Galery", "Modify")]
    [InsertPermission("Master", "Galery", "Insert")]
    [DeletePermission("Master", "Galery", "Delete")]
    [LookupScript("Rukuntangga.Galery", Permission = "*")]
    public sealed class TbGaleryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Deskripsi"), NotNull, QuickSearch]
        public String Deskripsi
        {
            get { return Fields.Deskripsi[this]; }
            set { Fields.Deskripsi[this] = value; }
        }

        [DisplayName("Level Area"), Size(20), NotNull]
        public String LevelArea
        {
            get { return Fields.LevelArea[this]; }
            set { Fields.LevelArea[this] = value; }
        }

        [DisplayName("Photos")]
        [MultipleFileUploadEditor(FilenameFormat = "Galery/~", CopyToHistory = true)]
        public String Photos
        {
            get { return Fields.Photos[this]; }
            set { Fields.Photos[this] = value; }
        }

        [DisplayName("Thumbnail")]
        [FileUploadEditor(FilenameFormat = "GaleryThumbnail/~", CopyToHistory = true)]
        public String Thumbnail
        {
            get { return Fields.Thumbnail[this]; }
            set { Fields.Thumbnail[this] = value; }
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
            get { return Fields.Deskripsi; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbGaleryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Deskripsi;
            public StringField LevelArea;
            public StringField Photos;
            public StringField Thumbnail;
            public StringField DibuatOleh;
            public StringField KodeRt;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
        }
    }
}
