using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AbidzarFrm.Modules.Common.Helpers
{
    public class FileNameResult
    {
        public string OriginalName { get; set; }
        public string Filename { get; set; }
    }

    public class ListFileNameResult
    {
        public IList<FileNameResult> Data { get; set; }
    }
}