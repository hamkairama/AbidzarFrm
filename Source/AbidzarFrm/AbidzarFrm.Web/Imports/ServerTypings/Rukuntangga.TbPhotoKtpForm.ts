namespace AbidzarFrm.Rukuntangga {
    export interface TbPhotoKtpForm {
        NamaFile: Serenity.StringEditor;
        DibuatOleh: Serenity.StringEditor;
        DibuatTanggal: Serenity.DateEditor;
        DieditOleh: Serenity.StringEditor;
        DieditTanggal: Serenity.DateEditor;
        SystemStatus: Serenity.BooleanEditor;
    }

    export class TbPhotoKtpForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbPhotoKtp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbPhotoKtpForm.init)  {
                TbPhotoKtpForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(TbPhotoKtpForm, [
                    'NamaFile', w0,
                    'DibuatOleh', w0,
                    'DibuatTanggal', w1,
                    'DieditOleh', w0,
                    'DieditTanggal', w1,
                    'SystemStatus', w2
                ]);
            }
        }
    }
}

