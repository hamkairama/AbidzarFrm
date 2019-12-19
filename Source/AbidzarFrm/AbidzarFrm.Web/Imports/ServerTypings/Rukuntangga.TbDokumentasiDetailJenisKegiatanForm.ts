namespace AbidzarFrm.Rukuntangga {
    export interface TbDokumentasiDetailJenisKegiatanForm {
        IdDetailJenisKegiatan: Serenity.IntegerEditor;
        NamaFile: Serenity.ImageUploadEditor;
    }

    export class TbDokumentasiDetailJenisKegiatanForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbDokumentasiDetailJenisKegiatan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbDokumentasiDetailJenisKegiatanForm.init)  {
                TbDokumentasiDetailJenisKegiatanForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.ImageUploadEditor;

                Q.initFormType(TbDokumentasiDetailJenisKegiatanForm, [
                    'IdDetailJenisKegiatan', w0,
                    'NamaFile', w1
                ]);
            }
        }
    }
}

