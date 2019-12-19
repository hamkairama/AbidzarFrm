namespace AbidzarFrm.Rukuntangga {
    export interface TbJadwalSiskamlimForm {
        Nik: Serenity.StringEditor;
        Nama: Serenity.StringEditor;
        Tanggal: Serenity.DateEditor;
        DibuatOleh: Serenity.StringEditor;
        DibuatTanggal: Serenity.DateEditor;
        DieditOleh: Serenity.StringEditor;
        DieditTanggal: Serenity.DateEditor;
        SystemStatus: Serenity.BooleanEditor;
    }

    export class TbJadwalSiskamlimForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbJadwalSiskamlim';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbJadwalSiskamlimForm.init)  {
                TbJadwalSiskamlimForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(TbJadwalSiskamlimForm, [
                    'Nik', w0,
                    'Nama', w0,
                    'Tanggal', w1,
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

