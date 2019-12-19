using AbidzarFrm.Rukuntangga.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AbidzarFrm.Common.Lookup
{

    [LookupScript("Rukuntangga.ProvinsiLookup", Permission = "*")]
    public class ProvinsiLookup : RowLookupScript<TbProvinsiRow>
    {
        public ProvinsiLookup()
        {
            IdField = TbProvinsiRow.Fields.Id.PropertyName;
            TextField = TbProvinsiRow.Fields.NamaProvinsi.PropertyName;
            Expiration = TimeSpan.FromSeconds(-1);
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
        }
    }

    [LookupScript("Rukuntangga.KotaLookup", Permission = "*")]
    public class KotaLookup : RowLookupScript<TbKotaRow>
    {
        public KotaLookup()
        {
            IdField = TbKotaRow.Fields.Id.PropertyName;
            TextField = TbKotaRow.Fields.NamaKota.PropertyName;
            Expiration = TimeSpan.FromSeconds(-1);
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);

        }
    }

    [LookupScript("Rukuntangga.KecamatanLookup", Permission = "*")]
    public class KecamatanLookup : RowLookupScript<TbKecamatanRow>
    {
        public KecamatanLookup()
        {
            IdField = TbKecamatanRow.Fields.Id.PropertyName;
            TextField = TbKecamatanRow.Fields.NamaKecamatan.PropertyName;
            Expiration = TimeSpan.FromSeconds(-1);
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);

        }
    }

    [LookupScript("Rukuntangga.KelurahanLookup", Permission = "*")]
    public class KelurahanLookup : RowLookupScript<TbKelurahanRow>
    {
        public KelurahanLookup()
        {
            IdField = TbKelurahanRow.Fields.Id.PropertyName;
            TextField = TbKelurahanRow.Fields.NamaKelurahan.PropertyName;
            Expiration = TimeSpan.FromSeconds(-1);
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
        }
    }


    [LookupScript("Rukuntangga.NikKtpLookup", Permission = "*")]
    public class NikKtpLookup : RowLookupScript<TbKtpRow>
    {
        public NikKtpLookup()
        {
            IdField = TbKtpRow.Fields.Nik.PropertyName;
            TextField = TbKtpRow.Fields.Nama.PropertyName;
            Expiration = TimeSpan.FromSeconds(-1);
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            string kodeRt = "31.73.08.1003";
            query.SelectTableFields().Where(string.Format("KodeRt = '{0}'", kodeRt));
        }

        protected override void ApplyOrder(SqlQuery query) { }
    }

    [LookupScript("Rukuntangga.LovGroupLookup", Permission = "*")]
    public class LovGroupLookup : RowLookupScript<TbListOfValueRow>
    {
        public LovGroupLookup()
        {
            IdField = TbListOfValueRow.Fields.Group.PropertyName;
            TextField = TbListOfValueRow.Fields.Group.PropertyName;
            Expiration = TimeSpan.FromSeconds(-1);
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = TbListOfValueRow.Fields;

            query.Select(fld.Group).Distinct(true)
                .Where(new Criteria(fld.Group).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query) { }
    }
}