namespace AbidzarFrm.Rukuntangga {
    export interface TbListOfValueForm {
        Kode: Serenity.StringEditor;
        Deskripsi: Serenity.StringEditor;
        Value: Serenity.StringEditor;
        Group: Serenity.StringEditor;
    }

    export class TbListOfValueForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbListOfValue';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbListOfValueForm.init)  {
                TbListOfValueForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TbListOfValueForm, [
                    'Kode', w0,
                    'Deskripsi', w0,
                    'Value', w0,
                    'Group', w0
                ]);
            }
        }
    }
}

