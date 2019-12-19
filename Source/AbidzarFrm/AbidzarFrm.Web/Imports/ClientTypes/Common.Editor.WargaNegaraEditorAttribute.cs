using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AbidzarFrm.Common.Editor
{
    public partial class WargaNegaraEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "AbidzarFrm.Common.Editor.WargaNegaraEditor";

        public WargaNegaraEditorAttribute()
            : base(Key)
        {
        }
    }
}

