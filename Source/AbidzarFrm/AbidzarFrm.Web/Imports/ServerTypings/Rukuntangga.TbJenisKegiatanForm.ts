namespace AbidzarFrm.Rukuntangga {
    export interface TbJenisKegiatanForm {
        JenisKegiatan: Serenity.StringEditor;
        Deskripsi: Serenity.StringEditor;
        tbDetailJenisKegiatanRow: TbDetailJenisKegiatanEditor;
    }

    export class TbJenisKegiatanForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbJenisKegiatan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbJenisKegiatanForm.init)  {
                TbJenisKegiatanForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = TbDetailJenisKegiatanEditor;

                Q.initFormType(TbJenisKegiatanForm, [
                    'JenisKegiatan', w0,
                    'Deskripsi', w0,
                    'tbDetailJenisKegiatanRow', w1
                ]);
            }
        }
    }
}

