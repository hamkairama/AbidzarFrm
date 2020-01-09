
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbTransactionFlow")]
    [BasedOnRow(typeof(Entities.TbTransactionFlowRow), CheckNames = true)]
    public class TbTransactionFlowColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String DocumentCode { get; set; }
        public String Code { get; set; }
        public Boolean IsActive { get; set; }
        public String Description { get; set; }
    }
}