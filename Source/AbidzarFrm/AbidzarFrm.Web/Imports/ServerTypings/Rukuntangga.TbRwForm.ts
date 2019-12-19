namespace AbidzarFrm.Rukuntangga {
    export interface TbRwForm {
        IdProvinsi: Serenity.LookupEditor;
        IdKota: Serenity.LookupEditor;
        IdKecamatan: Serenity.LookupEditor;
        IdKelurahan: Serenity.LookupEditor;
        KodeRw: Serenity.StringEditor;
        NoRw: Common.Editor.Sequens3Editor;
        Nik: Serenity.StringEditor;
        NamaRw: Serenity.StringEditor;
        Photo: Serenity.ImageUploadEditor;
        Deskripsi: Serenity.TextAreaEditor;
        Quotes: Serenity.TextAreaEditor;
        Visi: Serenity.TextAreaEditor;
        Misi: Serenity.TextAreaEditor;
        Facebook: Serenity.StringEditor;
        Twitter: Serenity.StringEditor;
        Instagram: Serenity.StringEditor;
        Whatsapp: Serenity.StringEditor;
        Header: Serenity.TextAreaEditor;
        Footer: Serenity.TextAreaEditor;
    }

    export class TbRwForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbRw';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbRwForm.init)  {
                TbRwForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = Common.Editor.Sequens3Editor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(TbRwForm, [
                    'IdProvinsi', w0,
                    'IdKota', w0,
                    'IdKecamatan', w0,
                    'IdKelurahan', w0,
                    'KodeRw', w1,
                    'NoRw', w2,
                    'Nik', w1,
                    'NamaRw', w1,
                    'Photo', w3,
                    'Deskripsi', w4,
                    'Quotes', w4,
                    'Visi', w4,
                    'Misi', w4,
                    'Facebook', w1,
                    'Twitter', w1,
                    'Instagram', w1,
                    'Whatsapp', w1,
                    'Header', w4,
                    'Footer', w4
                ]);
            }
        }
    }
}

