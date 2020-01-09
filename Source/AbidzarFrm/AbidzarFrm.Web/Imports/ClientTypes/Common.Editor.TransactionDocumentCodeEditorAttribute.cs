using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AbidzarFrm.Common.Editor
{
    public partial class TransactionDocumentCodeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "AbidzarFrm.Common.Editor.TransactionDocumentCodeEditor";

        public TransactionDocumentCodeEditorAttribute()
            : base(Key)
        {
        }
    }
}

