namespace AbidzarFrm.Rukuntangga {
    export interface TbParameterForm {
        Kode: Serenity.StringEditor;
        Deskripsi: Serenity.StringEditor;
        Value: Serenity.StringEditor;
    }

    export class TbParameterForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbParameter';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbParameterForm.init)  {
                TbParameterForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TbParameterForm, [
                    'Kode', w0,
                    'Deskripsi', w0,
                    'Value', w0
                ]);
            }
        }
    }
}

