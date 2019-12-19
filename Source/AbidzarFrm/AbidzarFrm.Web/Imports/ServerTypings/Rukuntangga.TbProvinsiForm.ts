namespace AbidzarFrm.Rukuntangga {
    export interface TbProvinsiForm {
        KodeProvinsi: Serenity.StringEditor;
        NamaProvinsi: Serenity.StringEditor;
    }

    export class TbProvinsiForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbProvinsi';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbProvinsiForm.init)  {
                TbProvinsiForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TbProvinsiForm, [
                    'KodeProvinsi', w0,
                    'NamaProvinsi', w0
                ]);
            }
        }
    }
}

