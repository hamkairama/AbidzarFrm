using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AbidzarFrm.Common.Editor
{
    public partial class TypeSlideshowEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "AbidzarFrm.Common.Editor.TypeSlideshowEditor";

        public TypeSlideshowEditorAttribute()
            : base(Key)
        {
        }
    }
}

