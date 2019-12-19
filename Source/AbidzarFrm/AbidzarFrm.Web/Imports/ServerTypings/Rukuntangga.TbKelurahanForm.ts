namespace AbidzarFrm.Rukuntangga {
    export interface TbKelurahanForm {
        IdKecamatan: Serenity.IntegerEditor;
        KodeKelurahan: Serenity.StringEditor;
        NamaKelurahan: Serenity.StringEditor;
    }

    export class TbKelurahanForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbKelurahan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbKelurahanForm.init)  {
                TbKelurahanForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(TbKelurahanForm, [
                    'IdKecamatan', w0,
                    'KodeKelurahan', w1,
                    'NamaKelurahan', w1
                ]);
            }
        }
    }
}

