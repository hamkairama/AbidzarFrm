namespace AbidzarFrm.Rukuntangga {
    export interface TbJenisInformasiForm {
        JenisInformasi: Serenity.StringEditor;
        tbDetailJenisInformasiRow: TbDetailJenisInformasiEditor;
    }

    export class TbJenisInformasiForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbJenisInformasi';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbJenisInformasiForm.init)  {
                TbJenisInformasiForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = TbDetailJenisInformasiEditor;

                Q.initFormType(TbJenisInformasiForm, [
                    'JenisInformasi', w0,
                    'tbDetailJenisInformasiRow', w1
                ]);
            }
        }
    }
}

