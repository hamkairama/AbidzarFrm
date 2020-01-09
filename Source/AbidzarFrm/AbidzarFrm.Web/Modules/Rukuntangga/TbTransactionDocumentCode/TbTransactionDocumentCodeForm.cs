
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbTransactionDocumentCode")]
    [BasedOnRow(typeof(Entities.TbTransactionDocumentCodeRow), CheckNames = true)]
    public class TbTransactionDocumentCodeForm
    {
        public String DocumentCode { get; set; }
        public String Description { get; set; }
    }
}