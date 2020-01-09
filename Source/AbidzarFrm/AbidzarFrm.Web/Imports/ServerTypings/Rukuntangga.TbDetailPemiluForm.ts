﻿namespace AbidzarFrm.Rukuntangga {
    export interface TbDetailPemiluForm {
        NoUrut: Serenity.IntegerEditor;
        Kandidat: Serenity.StringEditor;
        FileName: Serenity.ImageUploadEditor;
        Deskripsi: Serenity.HtmlContentEditor;
    }

    export class TbDetailPemiluForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbDetailPemilu';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbDetailPemiluForm.init)  {
                TbDetailPemiluForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.HtmlContentEditor;

                Q.initFormType(TbDetailPemiluForm, [
                    'NoUrut', w0,
                    'Kandidat', w1,
                    'FileName', w2,
                    'Deskripsi', w3
                ]);
            }
        }
    }
}

