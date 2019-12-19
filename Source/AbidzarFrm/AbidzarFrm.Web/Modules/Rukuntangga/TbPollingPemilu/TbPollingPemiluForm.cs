
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using AbidzarFrm.Common.Lookup;

    [FormScript("Rukuntangga.TbPollingPemilu")]
    [BasedOnRow(typeof(Entities.TbPollingPemiluRow), CheckNames = true)]
    public class TbPollingPemiluForm
    {
        [LookupEditor(typeof(NikKtpLookup))]
        public String Nik { get; set; }
    }
}