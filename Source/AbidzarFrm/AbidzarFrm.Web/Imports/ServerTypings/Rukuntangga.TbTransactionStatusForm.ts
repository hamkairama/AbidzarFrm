namespace AbidzarFrm.Rukuntangga {
    export interface TbTransactionStatusForm {
        DocumentCode: Common.Editor.TransactionDocumentCodeEditor;
        Code: Serenity.StringEditor;
        Internal: Serenity.StringEditor;
        External: Serenity.StringEditor;
    }

    export class TbTransactionStatusForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbTransactionStatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbTransactionStatusForm.init)  {
                TbTransactionStatusForm.init = true;

                var s = Serenity;
                var w0 = Common.Editor.TransactionDocumentCodeEditor;
                var w1 = s.StringEditor;

                Q.initFormType(TbTransactionStatusForm, [
                    'DocumentCode', w0,
                    'Code', w1,
                    'Internal', w1,
                    'External', w1
                ]);
            }
        }
    }
}

