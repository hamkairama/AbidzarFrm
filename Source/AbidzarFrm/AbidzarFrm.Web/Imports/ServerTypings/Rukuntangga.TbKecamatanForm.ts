namespace AbidzarFrm.Rukuntangga {
    export interface TbKecamatanForm {
        IdKota: Serenity.IntegerEditor;
        KodeKecamatan: Serenity.StringEditor;
        NamaKecamatan: Serenity.StringEditor;
    }

    export class TbKecamatanForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbKecamatan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbKecamatanForm.init)  {
                TbKecamatanForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(TbKecamatanForm, [
                    'IdKota', w0,
                    'KodeKecamatan', w1,
                    'NamaKecamatan', w1
                ]);
            }
        }
    }
}

