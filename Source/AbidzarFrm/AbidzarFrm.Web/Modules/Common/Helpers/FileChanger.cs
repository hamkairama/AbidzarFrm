using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AbidzarFrm.Modules.Common.Helpers
{
    public static class FileChanger
    {
        public static void CreateFolder(string destinationFolder)
        {
            destinationFolder = ConfigKey.GetPathFile("~/App_Data/upload/") + destinationFolder;
            bool exists = System.IO.Directory.Exists(destinationFolder);
            if (!exists)
                System.IO.Directory.CreateDirectory(destinationFolder);
        }

        public static void Move(string sourceFile, string destinationFile)
        {
            for (int i = 0; i < 2; i++)
            {
                if (i > 0)
                {
                    sourceFile = GetThumnail(sourceFile);
                    destinationFile = GetThumnail(destinationFile);
                }

                string x = ConfigKey.GetPathFile("~/App_Data/upload/") + sourceFile;
                string y = ConfigKey.GetPathFile("~/App_Data/upload/") + destinationFile;
                System.IO.File.Move(x, y);
            }
        }

        public static void Delete(string destinationFile)
        {
            for (int i = 0; i < 2; i++)
            {
                if (i > 0)
                {
                    destinationFile = GetThumnail(destinationFile);
                }
                string fileNamePath = ConfigKey.GetPathFile("~/App_Data/upload/") + destinationFile;
                System.IO.File.Delete(fileNamePath);

            }
        }

        //public static void Copy(string sourceFile, string destinationFile)
        //{
        //    string x = ConfigKey.GetPathFile("~/App_Data/upload/") + sourceFile;
        //    string y = ConfigKey.GetPathFile("~/App_Data/upload/") + destinationFile;
        //    System.IO.File.Copy(x, y, true);
        //}

        private static string GetThumnail(string fileName)
        {

            var spltx = fileName.Split('/');
            string last = spltx[spltx.Length - 1];

            var splty = last.Split('.');
            string newName = splty[0] + "_t.jpg";

            string result = fileName.Replace(last, newName);
            return result;
        }

    }
}