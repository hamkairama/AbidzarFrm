namespace AbidzarFrm.Rukuntangga {
    export interface TbAutentikasiTokenForm {
        Token: Serenity.StringEditor;
        Aplikasi: Serenity.StringEditor;
    }

    export class TbAutentikasiTokenForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbAutentikasiToken';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbAutentikasiTokenForm.init)  {
                TbAutentikasiTokenForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TbAutentikasiTokenForm, [
                    'Token', w0,
                    'Aplikasi', w0
                ]);
            }
        }
    }
}

