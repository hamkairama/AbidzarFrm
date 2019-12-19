namespace AbidzarFrm.Rukuntangga {
    export interface TbDetailJenisKegiatanForm {
        NamaKegiatan: Serenity.StringEditor;
        Lokasi: Serenity.StringEditor;
        Deskripsi: Serenity.TextAreaEditor;
        TanggalKegiatan: Serenity.DateEditor;
        WarnaLatar: Common.Editor.WarnaEditor;
        LevelArea: Common.Editor.LevelAreaEditor;
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
                var w1 = s.TextAreaEditor;
                var w2 = s.DateEditor;
                var w3 = Common.Editor.WarnaEditor;
                var w4 = Common.Editor.LevelAreaEditor;

                Q.initFormType(TbDetailJenisKegiatanForm, [
                    'NamaKegiatan', w0,
                    'Lokasi', w0,
                    'Deskripsi', w1,
                    'TanggalKegiatan', w2,
                    'WarnaLatar', w3,
                    'LevelArea', w4
                ]);
            }
        }
    }
}

