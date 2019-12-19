
namespace AbidzarFrm.Rukuntangga.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Rukuntangga.TbErrorLogs")]
    [BasedOnRow(typeof(Entities.TbErrorLogsRow), CheckNames = true)]
    public class TbErrorLogsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Double ErrNumber { get; set; }
        [EditLink]
        public String ErrSeverity { get; set; }
        public String ErrStat { get; set; }
        public String ErrProcedure { get; set; }
        public String ErrLine { get; set; }
        public String ErrMessage { get; set; }
        public String CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}