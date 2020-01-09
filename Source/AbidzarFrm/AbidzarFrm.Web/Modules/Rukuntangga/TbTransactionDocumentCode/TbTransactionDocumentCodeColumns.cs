
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbTransactionDocumentCode")]
    [BasedOnRow(typeof(Entities.TbTransactionDocumentCodeRow), CheckNames = true)]
    public class TbTransactionDocumentCodeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String DocumentCode { get; set; }
        public String Description { get; set; }
    }
}