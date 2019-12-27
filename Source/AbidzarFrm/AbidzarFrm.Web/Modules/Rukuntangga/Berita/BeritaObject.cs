using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AbidzarFrm.Modules.Rukuntangga.Berita
{
    public class BeritaRequest : ServiceRequest
    {
        
    }
    public class BeritaResponse : ServiceResponse
    {
        public string Index { get; set; }
        public string TransactionStatusCode { get; set; }
        public string FinalStatus { get; set; }
        public string AccessButton { get; set; }
        public string PopupMessage { get; set; }
        public string SendEmailTo { get; set; }
        public bool CcCreator { get; set; }
        public bool CcRequestor { get; set; }
        public bool IsSendEmail { get; set; }
        public string TemplateEmailType { get; set; }
    }

}