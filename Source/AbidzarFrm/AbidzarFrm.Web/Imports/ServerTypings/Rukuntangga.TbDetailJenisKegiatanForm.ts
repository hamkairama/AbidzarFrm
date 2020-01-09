namespace AbidzarFrm.Rukuntangga {
    export interface TbDetailJenisKegiatanForm {
        NamaKegiatan: Serenity.StringEditor;
        NamaFile: Serenity.ImageUploadEditor;
        Lokasi: Serenity.StringEditor;
        Deskripsi: Serenity.TextAreaEditor;
        TanggalKegiatan: Serenity.DateEditor;
        WarnaLatar: Common.Editor.WarnaEditor;
        LevelArea: Common.Editor.LevelAreaEditor;
        Dokumentasi: Serenity.MultipleImageUploadEditor;
    }

    export class TbDetailJenisKegiatanForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbDetailJenisKegiatan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbDetailJenisKegiatanForm.init)  {
                TbDetailJenisKegiatanForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.ImageUploadEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.DateEditor;
                var w4 = Common.Editor.WarnaEditor;
                var w5 = Common.Editor.LevelAreaEditor;
                var w6 = s.MultipleImageUploadEditor;

                Q.initFormType(TbDetailJenisKegiatanForm, [
                    'NamaKegiatan', w0,
                    'NamaFile', w1,
                    'Lokasi', w0,
                    'Deskripsi', w2,
                    'TanggalKegiatan', w3,
                    'WarnaLatar', w4,
                    'LevelArea', w5,
                    'Dokumentasi', w6
                ]);
            }
        }
    }
}

