namespace AbidzarFrm.Rukuntangga {
    export interface TbTransactionFlowForm {
        DocumentCode: Common.Editor.TransactionDocumentCodeEditor;
        Code: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
        tbTransactionFlowDetailRow: TbTransactionFlowDetailEditor;
    }

    export class TbTransactionFlowForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbTransactionFlow';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbTransactionFlowForm.init)  {
                TbTransactionFlowForm.init = true;

                var s = Serenity;
                var w0 = Common.Editor.TransactionDocumentCodeEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;
                var w3 = TbTransactionFlowDetailEditor;

                Q.initFormType(TbTransactionFlowForm, [
                    'DocumentCode', w0,
                    'Code', w1,
                    'Description', w1,
                    'IsActive', w2,
                    'tbTransactionFlowDetailRow', w3
                ]);
            }
        }
    }
}

