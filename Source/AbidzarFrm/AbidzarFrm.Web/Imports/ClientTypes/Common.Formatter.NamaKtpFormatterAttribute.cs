using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AbidzarFrm.Common.Formatter
{
    public partial class NamaKtpFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "AbidzarFrm.Common.Formatter.NamaKtpFormatter";

        public NamaKtpFormatterAttribute()
            : base(Key)
        {
        }
    }
}

