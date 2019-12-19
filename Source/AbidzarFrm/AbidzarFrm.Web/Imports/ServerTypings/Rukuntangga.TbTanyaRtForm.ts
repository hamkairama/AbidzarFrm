namespace AbidzarFrm.Rukuntangga {
    export interface TbTanyaRtForm {
        Judul: Serenity.StringEditor;
    }

    export class TbTanyaRtForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbTanyaRt';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbTanyaRtForm.init)  {
                TbTanyaRtForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TbTanyaRtForm, [
                    'Judul', w0
                ]);
            }
        }
    }
}

