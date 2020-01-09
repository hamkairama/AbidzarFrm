namespace AbidzarFrm.Rukuntangga {
    export interface TbGaleryForm {
        Deskripsi: Serenity.StringEditor;
        LevelArea: Common.Editor.LevelAreaEditor;
        Thumbnail: Serenity.ImageUploadEditor;
        Photos: Serenity.MultipleImageUploadEditor;
    }

    export class TbGaleryForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbGalery';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbGaleryForm.init)  {
                TbGaleryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = Common.Editor.LevelAreaEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.MultipleImageUploadEditor;

                Q.initFormType(TbGaleryForm, [
                    'Deskripsi', w0,
                    'LevelArea', w1,
                    'Thumbnail', w2,
                    'Photos', w3
                ]);
            }
        }
    }
}

