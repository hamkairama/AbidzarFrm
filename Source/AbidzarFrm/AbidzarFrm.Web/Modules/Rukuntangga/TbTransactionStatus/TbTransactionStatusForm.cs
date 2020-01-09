
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using AbidzarFrm.Common.Editor;

    [FormScript("Rukuntangga.TbTransactionStatus")]
    [BasedOnRow(typeof(Entities.TbTransactionStatusRow), CheckNames = true)]
    public class TbTransactionStatusForm
    {
        [TransactionDocumentCodeEditor]
        public String DocumentCode { get; set; }
        public String Code { get; set; }
        public String Internal { get; set; }
        public String External { get; set; }
    }
}