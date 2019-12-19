namespace AbidzarFrm.Rukuntangga {
    export interface TbRtForm {
        IdRw: Serenity.IntegerEditor;
        IdRwKodeRw: Serenity.StringEditor;
        KodeRt: Serenity.StringEditor;
        NoRt: Common.Editor.Sequens3Editor;
        KodeLogin: Serenity.StringEditor;
        Nik: Serenity.StringEditor;
        NamaRt: Serenity.StringEditor;
        Photo: Serenity.ImageUploadEditor;
        Deskripsi: Serenity.TextAreaEditor;
        Quotes: Serenity.TextAreaEditor;
        Visi: Serenity.TextAreaEditor;
        Misi: Serenity.TextAreaEditor;
        Facebook: Serenity.StringEditor;
        Twitter: Serenity.StringEditor;
        Instagram: Serenity.StringEditor;
        Whatsapp: Serenity.StringEditor;
    }

    export class TbRtForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbRt';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbRtForm.init)  {
                TbRtForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = Common.Editor.Sequens3Editor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(TbRtForm, [
                    'IdRw', w0,
                    'IdRwKodeRw', w1,
                    'KodeRt', w1,
                    'NoRt', w2,
                    'KodeLogin', w1,
                    'Nik', w1,
                    'NamaRt', w1,
                    'Photo', w3,
                    'Deskripsi', w4,
                    'Quotes', w4,
                    'Visi', w4,
                    'Misi', w4,
                    'Facebook', w1,
                    'Twitter', w1,
                    'Instagram', w1,
                    'Whatsapp', w1
                ]);
            }
        }
    }
}

