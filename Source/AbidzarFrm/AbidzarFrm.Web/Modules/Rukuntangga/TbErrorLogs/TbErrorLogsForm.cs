
namespace AbidzarFrm.Rukuntangga.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Rukuntangga.TbErrorLogs")]
    [BasedOnRow(typeof(Entities.TbErrorLogsRow), CheckNames = true)]
    public class TbErrorLogsForm
    {
        public String ErrSeverity { get; set; }
        public String ErrStat { get; set; }
        public String ErrProcedure { get; set; }
        public String ErrLine { get; set; }
        public String ErrMessage { get; set; }
        public String CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}