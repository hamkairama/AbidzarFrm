
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbTransactionFlowDetail")]
    [BasedOnRow(typeof(Entities.TbTransactionFlowDetailRow), CheckNames = true)]
    public class TbTransactionFlowDetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 TransactionFlowId { get; set; }
        [EditLink]
        public String TransactionStatusCode { get; set; }
        public String Name { get; set; }
        public Int16 StartStatus { get; set; }
        public Int16 FinalStatus { get; set; }
        public String AccessButton { get; set; }
        public String PopupMessage { get; set; }
        public String NextStatus { get; set; }
        public Int16 IsSendEmail { get; set; }
        public String SendEmailType { get; set; }
        public String SendEmailTo { get; set; }
        public String TemplateEmailType { get; set; }
        public Int16 CcRequestor { get; set; }
        public Int16 CcCreator { get; set; }
    }
}