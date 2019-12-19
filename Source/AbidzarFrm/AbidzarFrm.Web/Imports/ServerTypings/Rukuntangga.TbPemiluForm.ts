namespace AbidzarFrm.Rukuntangga {
    export interface TbPemiluForm {
        Judul: Serenity.StringEditor;
        FileName: Serenity.ImageUploadEditor;
        KodeRt: Serenity.StringEditor;
        tbDetailPemiluRow: TbDetailPemiluEditor;
    }

    export class TbPemiluForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbPemilu';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbPemiluForm.init)  {
                TbPemiluForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.ImageUploadEditor;
                var w2 = TbDetailPemiluEditor;

                Q.initFormType(TbPemiluForm, [
                    'Judul', w0,
                    'FileName', w1,
                    'KodeRt', w0,
                    'tbDetailPemiluRow', w2
                ]);
            }
        }
    }
}

