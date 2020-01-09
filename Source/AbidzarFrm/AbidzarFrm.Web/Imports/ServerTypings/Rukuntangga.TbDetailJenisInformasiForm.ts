namespace AbidzarFrm.Rukuntangga {
    export interface TbDetailJenisInformasiForm {
        Judul: Serenity.StringEditor;
        NamaFile: Serenity.ImageUploadEditor;
        Deskripsi: Serenity.HtmlContentEditor;
        LevelArea: Common.Editor.LevelAreaEditor;
        IsLandingPage: Serenity.BooleanEditor;
    }

    export class TbDetailJenisInformasiForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbDetailJenisInformasi';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbDetailJenisInformasiForm.init)  {
                TbDetailJenisInformasiForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.ImageUploadEditor;
                var w2 = s.HtmlContentEditor;
                var w3 = Common.Editor.LevelAreaEditor;
                var w4 = s.BooleanEditor;

                Q.initFormType(TbDetailJenisInformasiForm, [
                    'Judul', w0,
                    'NamaFile', w1,
                    'Deskripsi', w2,
                    'LevelArea', w3,
                    'IsLandingPage', w4
                ]);
            }
        }
    }
}

