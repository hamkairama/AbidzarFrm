namespace AbidzarFrm.Rukuntangga {
    export interface TbJabatanForm {
        NamaJabatan: Serenity.StringEditor;
    }

    export class TbJabatanForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbJabatan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbJabatanForm.init)  {
                TbJabatanForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TbJabatanForm, [
                    'NamaJabatan', w0
                ]);
            }
        }
    }
}

