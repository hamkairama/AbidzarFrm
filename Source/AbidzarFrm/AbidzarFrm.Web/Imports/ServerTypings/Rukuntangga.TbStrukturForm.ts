namespace AbidzarFrm.Rukuntangga {
    export interface TbStrukturForm {
        IdKtp: Serenity.LookupEditor;
        IdJabatan: Common.Editor.JabatanEditor;
        AwalPeriode: Serenity.DateEditor;
        AkhirPeriode: Serenity.DateEditor;
    }

    export class TbStrukturForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbStruktur';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbStrukturForm.init)  {
                TbStrukturForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = Common.Editor.JabatanEditor;
                var w2 = s.DateEditor;

                Q.initFormType(TbStrukturForm, [
                    'IdKtp', w0,
                    'IdJabatan', w1,
                    'AwalPeriode', w2,
                    'AkhirPeriode', w2
                ]);
            }
        }
    }
}

