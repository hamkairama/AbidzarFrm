namespace AbidzarFrm.Rukuntangga {
    export interface TbTransactionFlowDetailForm {
        TransactionStatusCode: Common.Editor.TransactionStatusEditor;
        Name: Serenity.StringEditor;
        StartStatus: Serenity.BooleanEditor;
        FinalStatus: Serenity.BooleanEditor;
        AccessButton: Common.Editor.AdministrationRoleEditor;
        NextStatus: Common.Editor.TransactionStatusEditor;
        PopupMessage: Serenity.TextAreaEditor;
        IsSendEmail: Serenity.BooleanEditor;
        SendEmailType: Common.Editor.SendEmailTypeEditor;
        SendEmailTo: Serenity.TextAreaEditor;
        TemplateEmailType: Common.Editor.EmailTemplateEditor;
        CcCreator: Serenity.BooleanEditor;
        CcRequestor: Serenity.BooleanEditor;
    }

    export class TbTransactionFlowDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbTransactionFlowDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbTransactionFlowDetailForm.init)  {
                TbTransactionFlowDetailForm.init = true;

                var s = Serenity;
                var w0 = Common.Editor.TransactionStatusEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;
                var w3 = Common.Editor.AdministrationRoleEditor;
                var w4 = s.TextAreaEditor;
                var w5 = Common.Editor.SendEmailTypeEditor;
                var w6 = Common.Editor.EmailTemplateEditor;

                Q.initFormType(TbTransactionFlowDetailForm, [
                    'TransactionStatusCode', w0,
                    'Name', w1,
                    'StartStatus', w2,
                    'FinalStatus', w2,
                    'AccessButton', w3,
                    'NextStatus', w0,
                    'PopupMessage', w4,
                    'IsSendEmail', w2,
                    'SendEmailType', w5,
                    'SendEmailTo', w4,
                    'TemplateEmailType', w6,
                    'CcCreator', w2,
                    'CcRequestor', w2
                ]);
            }
        }
    }
}

