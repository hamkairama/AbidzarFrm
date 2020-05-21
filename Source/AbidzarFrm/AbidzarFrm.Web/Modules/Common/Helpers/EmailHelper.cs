﻿using System.Web.Hosting;
using System.IO;
using System.Net.Mail;
using System.Collections.Generic;
using System;
using System.Configuration;
using Serenity.Services;
using Serenity;
using Serenity.Data;
using System.Data;
using AbidzarFrm.Rukuntangga.Entities;

namespace AbidzarFrm
{
    public class EmailHelper
    {
        public static void Send(string subject, string body, string sendEmailTo, string sendEmailcc = "", IDictionary<string, string> attachmentsParam = null, string displayName = "")
        {
            var message = new MailMessage();

            try
            {
                if (sendEmailTo != null && sendEmailTo != "")
                {
                    String[] tos = sendEmailTo.ToString().Split(';');
                    foreach (string toitem in tos)
                    {
                        if (!string.IsNullOrEmpty(toitem))
                            message.To.Add(toitem);
                    }
                }

                if (sendEmailcc != null && sendEmailcc != "")
                {
                    String[] cCs = sendEmailcc.ToString().Split(';');
                    foreach (string ccitem in cCs)
                    {
                        if (!string.IsNullOrEmpty(ccitem))
                            message.CC.Add(ccitem);
                    }
                }
                if (displayName != "")
                {
                    message.From = new MailAddress(displayName);
                }
                message.Subject = subject;
                message.Body = body;
                message.IsBodyHtml = true;

                if (attachmentsParam != null)
                {
                    foreach (KeyValuePair<string, string> item in attachmentsParam)
                    {
                        if (File.Exists(item.Value))
                        {
                            byte[] data = GetData(item.Value);
                            MemoryStream ms = new MemoryStream(data);

                            message.Attachments.Add(new Attachment(ms, item.Key, GetMimeType(item.Value)));
                        }
                    }
                }

                var client = new SmtpClient();

                if (client.DeliveryMethod == SmtpDeliveryMethod.SpecifiedPickupDirectory &&
                    string.IsNullOrEmpty(client.PickupDirectoryLocation))
                {
                    var pickupPath = HostingEnvironment.MapPath("~/App_Data");
                    pickupPath = Path.Combine(pickupPath, "Mail");
                    Directory.CreateDirectory(pickupPath);
                    client.PickupDirectoryLocation = pickupPath;
                }
                else if (client.DeliveryMethod == SmtpDeliveryMethod.Network)
                {
                    client.Host = ConfigurationManager.AppSettings["Email.SMTPHost"];
                    client.Credentials = new System.Net.NetworkCredential
                            (ConfigurationManager.AppSettings["Email.SMTPUser"], ConfigurationManager.AppSettings["Email.SMTPPassword"]);

                    client.UseDefaultCredentials = false;
                }

                client.Send(message);
                WriteMailLog(subject, body, sendEmailTo, sendEmailcc, true, "Sukses");
            }
            catch (Exception e)
            {
                string unableReceipient = "";
                if (((System.Net.Mail.SmtpFailedRecipientException)e).FailedRecipient != null)
                {
                    unableReceipient = ((System.Net.Mail.SmtpFailedRecipientException)e).FailedRecipient;
                }
                WriteMailLog(subject, body, sendEmailTo, sendEmailcc, false, e.Message.ToString() + unableReceipient + " | " + e.StackTrace.ToString());
            }
        }

        static string GetMimeType(string fileName)
        {
            string mimeType = "application/unknown";
            string ext = System.IO.Path.GetExtension(fileName).ToLower();
            Microsoft.Win32.RegistryKey regKey = Microsoft.Win32.Registry.ClassesRoot.OpenSubKey(ext);
            if (regKey != null && regKey.GetValue("Content Type") != null)
                mimeType = regKey.GetValue("Content Type").ToString();
            return mimeType;
        }

        static byte[] GetData(string filePath)
        {
            Byte[] data = System.IO.File.ReadAllBytes(filePath);

            return data;
        }

        private static void WriteMailLog(string subject, string body, string sendEmailTo, string sendEmailcc, Boolean status, string errorMessage)
        {
            SaveResponse response = new SaveResponse();
            int insertUserId = Convert.ToInt32(Authorization.UserId);
            SaveRequest<TbMailLogRow> request = new SaveRequest<TbMailLogRow>();
            TbMailLogRow mail = new TbMailLogRow { Subject = subject, Body = body, To = sendEmailTo, Cc = sendEmailcc, Status = status, ErrorMessage = errorMessage };
            request.Entity = mail;

            Rukuntangga.Repositories.TbMailLogRepository repo = new Rukuntangga.Repositories.TbMailLogRepository();
            using (var connection = SqlConnections.NewFor<TbMailLogRow>())
            using (var uow = new UnitOfWork(connection))
            {
                repo.Create(uow, request);
                uow.Commit();
            }

        }

        public static TbEmailTemplateRow GetEmailTemplate(string emailType)
        {
            TbEmailTemplateRow emailTemplate = null;
            using (IDbConnection conn = SqlConnections.NewByKey("Rukuntangga"))
            {
                emailTemplate = conn.TrySingle<TbEmailTemplateRow>(q => q.SelectTableFields().Where(new Criteria(TbEmailTemplateRow.Fields.KodeTemplate) == emailType));
            }

            return emailTemplate;
        }
    }
}