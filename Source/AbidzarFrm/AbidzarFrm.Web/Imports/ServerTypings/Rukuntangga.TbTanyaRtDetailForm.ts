namespace AbidzarFrm.Rukuntangga {
    export interface TbTanyaRtDetailForm {
        IdTanyaRt: Serenity.IntegerEditor;
        Deskripsi: Serenity.TextAreaEditor;
    }

    export class TbTanyaRtDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbTanyaRtDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbTanyaRtDetailForm.init)  {
                TbTanyaRtDetailForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(TbTanyaRtDetailForm, [
                    'IdTanyaRt', w0,
                    'Deskripsi', w1
                ]);
            }
        }
    }
}

