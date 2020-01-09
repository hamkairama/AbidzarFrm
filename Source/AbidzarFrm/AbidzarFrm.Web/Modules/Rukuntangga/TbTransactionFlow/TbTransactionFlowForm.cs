
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using AbidzarFrm.Rukuntangga.Entities;
    using AbidzarFrm.Common.Editor;

    [FormScript("Rukuntangga.TbTransactionFlow")]
    [BasedOnRow(typeof(Entities.TbTransactionFlowRow), CheckNames = true)]
    public class TbTransactionFlowForm
    {
        [TransactionDocumentCodeEditor]
        public String DocumentCode { get; set; }
        public String Code { get; set; }
        public String Description { get; set; }
        public Boolean IsActive { get; set; }

        [Category("Flow Detail")]
        [TbTransactionFlowDetailEditor]
        public List<TbTransactionFlowDetailRow> tbTransactionFlowDetailRow { get; set; }
    }
}