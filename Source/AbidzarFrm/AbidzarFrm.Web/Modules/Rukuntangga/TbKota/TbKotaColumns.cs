
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbKota")]
    [BasedOnRow(typeof(Entities.TbKotaRow), CheckNames = true)]
    public class TbKotaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String IdProvinsiNamaProvinsi { get; set; }
        [EditLink]
        public String KodeKota { get; set; }
        public String NamaKota { get; set; }
    }
}