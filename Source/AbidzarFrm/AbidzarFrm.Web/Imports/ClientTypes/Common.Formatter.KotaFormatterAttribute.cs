using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AbidzarFrm.Common.Formatter
{
    public partial class KotaFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "AbidzarFrm.Common.Formatter.KotaFormatter";

        public KotaFormatterAttribute()
            : base(Key)
        {
        }
    }
}

