
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbAutentikasiToken")]
    [BasedOnRow(typeof(Entities.TbAutentikasiTokenRow), CheckNames = true)]
    public class TbAutentikasiTokenForm
    {
        public String Token { get; set; }
        public String Aplikasi { get; set; }
    }
}