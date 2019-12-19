namespace AbidzarFrm.Rukuntangga {
    export interface TbPollingPemiluForm {
        Nik: Serenity.LookupEditor;
    }

    export class TbPollingPemiluForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbPollingPemilu';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbPollingPemiluForm.init)  {
                TbPollingPemiluForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;

                Q.initFormType(TbPollingPemiluForm, [
                    'Nik', w0
                ]);
            }
        }
    }
}

