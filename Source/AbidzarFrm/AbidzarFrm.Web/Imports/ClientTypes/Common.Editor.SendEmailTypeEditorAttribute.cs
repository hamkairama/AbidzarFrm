using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AbidzarFrm.Common.Editor
{
    public partial class SendEmailTypeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "AbidzarFrm.Common.Editor.SendEmailTypeEditor";

        public SendEmailTypeEditorAttribute()
            : base(Key)
        {
        }
    }
}

