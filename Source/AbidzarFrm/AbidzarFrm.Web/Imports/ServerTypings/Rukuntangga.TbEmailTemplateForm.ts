namespace AbidzarFrm.Rukuntangga {
    export interface TbEmailTemplateForm {
        KodeTemplate: Serenity.StringEditor;
        Subject: Serenity.TextAreaEditor;
        Template: Serenity.TextAreaEditor;
    }

    export class TbEmailTemplateForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbEmailTemplate';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbEmailTemplateForm.init)  {
                TbEmailTemplateForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(TbEmailTemplateForm, [
                    'KodeTemplate', w0,
                    'Subject', w1,
                    'Template', w1
                ]);
            }
        }
    }
}

