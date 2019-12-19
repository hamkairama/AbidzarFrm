
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbTanyaRt")]
    [BasedOnRow(typeof(Entities.TbTanyaRtRow), CheckNames = true)]
    public class TbTanyaRtForm
    {
        public String Judul { get; set; }
    }
}