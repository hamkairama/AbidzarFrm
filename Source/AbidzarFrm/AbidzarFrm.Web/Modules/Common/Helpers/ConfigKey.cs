using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace AbidzarFrm.Modules.Common.Helpers
{
    public class ConfigKey
    {
        public static string GetPathFile(string pathFile)
        {
            string filePath = HttpContext.Current.Server.MapPath(pathFile);
            return filePath;
        }
        public static string GetAppSettingPathValue(string keyString)
        {
            string filePath = HttpContext.Current.Server.MapPath(GetAppSettingValue(keyString));
            return filePath;
        }
        public static string GetAppSettingValue(string keyString)
        {
            string valueString = ConfigurationManager.AppSettings[keyString].ToString();
            return valueString;
        }
    }
}