namespace AbidzarFrm.Rukuntangga {
    export interface TbLaporanKasForm {
        Deskripsi: Serenity.StringEditor;
        Tanggal: Serenity.DateEditor;
        Total: Serenity.DecimalEditor;
        Tipe: Serenity.StringEditor;
        DibuatOleh: Serenity.StringEditor;
        DibuatTanggal: Serenity.DateEditor;
        DieditOleh: Serenity.StringEditor;
        DieditTanggal: Serenity.DateEditor;
        SystemStatus: Serenity.BooleanEditor;
        KodeRt: Serenity.StringEditor;
    }

    export class TbLaporanKasForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbLaporanKas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbLaporanKasForm.init)  {
                TbLaporanKasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(TbLaporanKasForm, [
                    'Deskripsi', w0,
                    'Tanggal', w1,
                    'Total', w2,
                    'Tipe', w0,
                    'DibuatOleh', w0,
                    'DibuatTanggal', w1,
                    'DieditOleh', w0,
                    'DieditTanggal', w1,
                    'SystemStatus', w3,
                    'KodeRt', w0
                ]);
            }
        }
    }
}

