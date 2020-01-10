
namespace AbidzarFrm.Rukuntangga.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using AbidzarFrm.Common.Lookup;
    using System.Collections.Generic;

    [ConnectionKey("Rukuntangga"), Module("Rukuntangga"), TableName("[dbo].[TbRw]")]
    [DisplayName("Rw"), InstanceName("Rw")]
    [ReadPermission("Master", "Rw", "View")]
    [ModifyPermission("Master", "Rw", "Modify")]
    [InsertPermission("Master", "Rw", "Insert")]
    [DeletePermission("Master", "Rw", "Delete")]
    [LookupScript("Rukuntangga.Rw", Permission = "*")]
    public sealed class TbRwRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Provinsi"), LookupEditor(typeof(ProvinsiLookup))]
        public Int32? IdProvinsi
        {
            get { return Fields.IdProvinsi[this]; }
            set { Fields.IdProvinsi[this] = value; }
        }

        [DisplayName("Kota"), LookupEditor(typeof(KotaLookup), CascadeFrom = "IdProvinsi", CascadeField = "IdProvinsi")]
        public Int32? IdKota
        {
            get { return Fields.IdKota[this]; }
            set { Fields.IdKota[this] = value; }
        }

        [DisplayName("Kecamatan"), LookupEditor(typeof(KecamatanLookup), CascadeFrom = "IdKota", CascadeField = "IdKota")]
        public Int32? IdKecamatan
        {
            get { return Fields.IdKecamatan[this]; }
            set { Fields.IdKecamatan[this] = value; }
        }

        [DisplayName("Kelurahan"), NotNull, LookupEditor(typeof(KelurahanLookup), CascadeFrom = "IdKecamatan", CascadeField = "IdKecamatan")]
        public Int32? IdKelurahan
        {
            get { return Fields.IdKelurahan[this]; }
            set { Fields.IdKelurahan[this] = value; }
        }

        [DisplayName("Kode Rw"), Size(20), NotNull, QuickSearch]
        public String KodeRw
        {
            get { return Fields.KodeRw[this]; }
            set { Fields.KodeRw[this] = value; }
        }

        [DisplayName("Nik"), Size(16)]
        public String Nik
        {
            get { return Fields.Nik[this]; }
            set { Fields.Nik[this] = value; }
        }

        [DisplayName("No Rw"), Size(5)]
        public String NoRw
        {
            get { return Fields.NoRw[this]; }
            set { Fields.NoRw[this] = value; }
        }

        [DisplayName("Nama Rw"), Size(100), NotNull]
        public String NamaRw
        {
            get { return Fields.NamaRw[this]; }
            set { Fields.NamaRw[this] = value; }
        }

        [DisplayName("Photo")]
        [ImageUploadEditor(FilenameFormat = "Rw/|KodeRw|/~", CopyToHistory = false)]
        public String Photo
        {
            get { return Fields.Photo[this]; }
            set { Fields.Photo[this] = value; }
        }

        [DisplayName("Deskripsi")]
        public String Deskripsi
        {
            get { return Fields.Deskripsi[this]; }
            set { Fields.Deskripsi[this] = value; }
        }

        [DisplayName("Quotes")]
        public String Quotes
        {
            get { return Fields.Quotes[this]; }
            set { Fields.Quotes[this] = value; }
        }

        [DisplayName("Visi")]
        public String Visi
        {
            get { return Fields.Visi[this]; }
            set { Fields.Visi[this] = value; }
        }

        [DisplayName("Misi")]
        public String Misi
        {
            get { return Fields.Misi[this]; }
            set { Fields.Misi[this] = value; }
        }

        [DisplayName("Facebook"), Size(100)]
        public String Facebook
        {
            get { return Fields.Facebook[this]; }
            set { Fields.Facebook[this] = value; }
        }

        [DisplayName("Twitter"), Size(100)]
        public String Twitter
        {
            get { return Fields.Twitter[this]; }
            set { Fields.Twitter[this] = value; }
        }

        [DisplayName("Instagram"), Size(100)]
        public String Instagram
        {
            get { return Fields.Instagram[this]; }
            set { Fields.Instagram[this] = value; }
        }

        [DisplayName("Whatsapp"), Size(100)]
        public String Whatsapp
        {
            get { return Fields.Whatsapp[this]; }
            set { Fields.Whatsapp[this] = value; }
        }

        [DisplayName("Header"), Size(500)]
        public String Header
        {
            get { return Fields.Header[this]; }
            set { Fields.Header[this] = value; }
        }

        [DisplayName("Footer")]
        public String Footer
        {
            get { return Fields.Footer[this]; }
            set { Fields.Footer[this] = value; }
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

        //[DisplayName("Biodata"), MasterDetailRelation(foreignKey: "Nik"), NotMapped]
        //public List<TbBiodataRow> tbBiodataRow
        //{
        //    get { return Fields.tbBiodataRow[this]; }
        //    set { Fields.tbBiodataRow[this] = value; }
        //}

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.KodeRw; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbRwRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdKecamatan;
            public Int32Field IdKota;
            public Int32Field IdProvinsi;
            public Int32Field IdKelurahan;
            public StringField KodeRw;
            public StringField Nik;
            public StringField NoRw;
            public StringField NamaRw;
            public StringField Photo;
            public StringField Deskripsi;
            public StringField Quotes;
            public StringField Visi;
            public StringField Misi;
            public StringField Facebook;
            public StringField Twitter;
            public StringField Instagram;
            public StringField Whatsapp;
            public StringField Header;
            public StringField Footer;
            public StringField DibuatOleh;
            public DateTimeField DibuatTanggal;
            public StringField DieditOleh;
            public DateTimeField DieditTanggal;
            public BooleanField SystemStatus;

            //relationship
            //public RowListField<TbBiodataRow> tbBiodataRow;
        }
    }
}
