
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbTransactionStatus")]
    [BasedOnRow(typeof(Entities.TbTransactionStatusRow), CheckNames = true)]
    public class TbTransactionStatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String DocumentCode { get; set; }
        public String Code { get; set; }
        public String Internal { get; set; }
        public String External { get; set; }
    }
}