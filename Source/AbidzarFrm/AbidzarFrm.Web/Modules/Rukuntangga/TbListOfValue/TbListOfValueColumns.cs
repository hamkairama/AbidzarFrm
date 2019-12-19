
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using AbidzarFrm.Common.Lookup;

    [ColumnsScript("Rukuntangga.TbListOfValue")]
    [BasedOnRow(typeof(Entities.TbListOfValueRow), CheckNames = true)]
    public class TbListOfValueColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Kode { get; set; }
        public String Deskripsi { get; set; }
        public String Value { get; set; }
        [LookupEditor(typeof(LovGroupLookup)), QuickFilter]
        public String Group { get; set; }
    }
}