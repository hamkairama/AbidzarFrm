namespace AbidzarFrm.Rukuntangga {
    export interface TbUserForm {
        Nik: Serenity.StringEditor;
        Sandi: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Status: Serenity.BooleanEditor;
        KodeVerifikasi: Serenity.StringEditor;
        IsMobile: Serenity.BooleanEditor;
        IdRole: Serenity.StringEditor;
        DibuatOleh: Serenity.StringEditor;
        DibuatTanggal: Serenity.DateEditor;
        DieditOleh: Serenity.StringEditor;
        DieditTanggal: Serenity.DateEditor;
        SystemStatus: Serenity.BooleanEditor;
    }

    export class TbUserForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbUser';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbUserForm.init)  {
                TbUserForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.DateEditor;

                Q.initFormType(TbUserForm, [
                    'Nik', w0,
                    'Sandi', w0,
                    'Email', w0,
                    'Status', w1,
                    'KodeVerifikasi', w0,
                    'IsMobile', w1,
                    'IdRole', w0,
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

