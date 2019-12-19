namespace AbidzarFrm.Rukuntangga {
    export interface TbKotaForm {
        IdProvinsi: Serenity.IntegerEditor;
        KodeKota: Serenity.StringEditor;
        NamaKota: Serenity.StringEditor;
    }

    export class TbKotaForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbKota';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbKotaForm.init)  {
                TbKotaForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(TbKotaForm, [
                    'IdProvinsi', w0,
                    'KodeKota', w1,
                    'NamaKota', w1
                ]);
            }
        }
    }
}

