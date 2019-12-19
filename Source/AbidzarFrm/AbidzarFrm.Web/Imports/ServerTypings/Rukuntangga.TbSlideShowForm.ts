namespace AbidzarFrm.Rukuntangga {
    export interface TbSlideShowForm {
        Judul: Serenity.StringEditor;
        Deskripsi: Serenity.TextAreaEditor;
        FileName: Serenity.ImageUploadEditor;
        Tipe: Common.Editor.TypeSlideshowEditor;
        Posisi: Common.Editor.TypePosisiIklanEditor;
        PathUrl: Serenity.StringEditor;
        KodeRt: Serenity.StringEditor;
    }

    export class TbSlideShowForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbSlideShow';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbSlideShowForm.init)  {
                TbSlideShowForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = Common.Editor.TypeSlideshowEditor;
                var w4 = Common.Editor.TypePosisiIklanEditor;

                Q.initFormType(TbSlideShowForm, [
                    'Judul', w0,
                    'Deskripsi', w1,
                    'FileName', w2,
                    'Tipe', w3,
                    'Posisi', w4,
                    'PathUrl', w0,
                    'KodeRt', w0
                ]);
            }
        }
    }
}

