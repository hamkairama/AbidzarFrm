namespace AbidzarFrm.Rukuntangga {
    export interface TbUserApiForm {
        NamaApi: Serenity.StringEditor;
        IdUser: Serenity.StringEditor;
        Sandi: Serenity.StringEditor;
        Status: Serenity.BooleanEditor;
        DibuatOleh: Serenity.StringEditor;
        DibuatTanggal: Serenity.DateEditor;
        DieditOleh: Serenity.StringEditor;
        DieditTanggal: Serenity.DateEditor;
        SystemStatus: Serenity.BooleanEditor;
    }

    export class TbUserApiForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbUserApi';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbUserApiForm.init)  {
                TbUserApiForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.DateEditor;

                Q.initFormType(TbUserApiForm, [
                    'NamaApi', w0,
                    'IdUser', w0,
                    'Sandi', w0,
                    'Status', w1,
                    'DibuatOleh', w0,
                    'DibuatTanggal', w2,
                    'DieditOleh', w0,
                    'DieditTanggal', w2,
                    'SystemStatus', w1
                ]);
            }
        }
    }
}

