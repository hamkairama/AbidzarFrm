namespace AbidzarFrm.Rukuntangga {
    export interface TbBiodataForm {
        Nik: Serenity.StringEditor;
        Gelar: Serenity.StringEditor;
        Tahun: Serenity.StringEditor;
        Deskripsi: Serenity.StringEditor;
    }

    export class TbBiodataForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbBiodata';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbBiodataForm.init)  {
                TbBiodataForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TbBiodataForm, [
                    'Nik', w0,
                    'Gelar', w0,
                    'Tahun', w0,
                    'Deskripsi', w0
                ]);
            }
        }
    }
}

