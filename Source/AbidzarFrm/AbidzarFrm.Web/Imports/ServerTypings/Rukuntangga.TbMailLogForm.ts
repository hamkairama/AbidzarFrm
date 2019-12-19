namespace AbidzarFrm.Rukuntangga {
    export interface TbMailLogForm {
        Subject: Serenity.StringEditor;
        Body: Serenity.TextAreaEditor;
        From: Serenity.StringEditor;
        To: Serenity.TextAreaEditor;
        Cc: Serenity.TextAreaEditor;
        Status: Serenity.BooleanEditor;
        ErrorMessage: Serenity.TextAreaEditor;
    }

    export class TbMailLogForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbMailLog';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbMailLogForm.init)  {
                TbMailLogForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(TbMailLogForm, [
                    'Subject', w0,
                    'Body', w1,
                    'From', w0,
                    'To', w1,
                    'Cc', w1,
                    'Status', w2,
                    'ErrorMessage', w1
                ]);
            }
        }
    }
}

