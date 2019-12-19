namespace AbidzarFrm.Rukuntangga {
    export interface TbHistoricalUserLoginForm {
        Nik: Serenity.StringEditor;
        IsMobile: Serenity.BooleanEditor;
        Login: Serenity.DateEditor;
        Logout: Serenity.DateEditor;
    }

    export class TbHistoricalUserLoginForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbHistoricalUserLogin';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbHistoricalUserLoginForm.init)  {
                TbHistoricalUserLoginForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.DateEditor;

                Q.initFormType(TbHistoricalUserLoginForm, [
                    'Nik', w0,
                    'IsMobile', w1,
                    'Login', w2,
                    'Logout', w2
                ]);
            }
        }
    }
}

