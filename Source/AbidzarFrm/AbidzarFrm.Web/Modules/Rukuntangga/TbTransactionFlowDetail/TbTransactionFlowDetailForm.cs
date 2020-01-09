
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

    [FormScript("Rukuntangga.TbTransactionFlowDetail")]
    [BasedOnRow(typeof(Entities.TbTransactionFlowDetailRow), CheckNames = true)]
    public class TbTransactionFlowDetailForm
    {
        [TransactionStatusEditor]
        [HalfWidth]
        public String TransactionStatusCode { get; set; }
        [HalfWidth]
        public String Name { get; set; }
        [HalfWidth, BooleanEditor]
        public Int16 StartStatus { get; set; }
        [HalfWidth, BooleanEditor]
        public Int16 FinalStatus { get; set; }
        [AdministrationRoleEditor]
        [HalfWidth]
        public String AccessButton { get; set; }
        [TransactionStatusEditor]
        [HalfWidth]
        public String NextStatus { get; set; }
        [TextAreaEditor(Rows = 2)]
        [HalfWidth]
        public String PopupMessage { get; set; }
        [HalfWidth, BooleanEditor]
        public Int16 IsSendEmail { get; set; }
        [SendEmailTypeEditor]
        [HalfWidth]
        public String SendEmailType { get; set; }
        [HalfWidth, TextAreaEditor(Rows = 5, Cols = 10)]
        public String SendEmailTo { get; set; }
        [EmailTemplateEditor]
        public String TemplateEmailType { get; set; }
        [HalfWidth, BooleanEditor]
        public Int16 CcCreator { get; set; }
        [HalfWidth, BooleanEditor]
        public Int16 CcRequestor { get; set; }
    }
}