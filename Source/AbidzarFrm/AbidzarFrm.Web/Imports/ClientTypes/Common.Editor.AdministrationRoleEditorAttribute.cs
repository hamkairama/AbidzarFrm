using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AbidzarFrm.Common.Editor
{
    public partial class AdministrationRoleEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "AbidzarFrm.Common.Editor.AdministrationRoleEditor";

        public AdministrationRoleEditorAttribute()
            : base(Key)
        {
        }
    }
}

