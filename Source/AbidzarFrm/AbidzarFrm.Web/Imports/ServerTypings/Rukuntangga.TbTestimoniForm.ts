namespace AbidzarFrm.Rukuntangga {
    export interface TbTestimoniForm {
        Nik: Serenity.LookupEditor;
        Deskripsi: Serenity.TextAreaEditor;
    }

    export class TbTestimoniForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbTestimoni';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbTestimoniForm.init)  {
                TbTestimoniForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(TbTestimoniForm, [
                    'Nik', w0,
                    'Deskripsi', w1
                ]);
            }
        }
    }
}

