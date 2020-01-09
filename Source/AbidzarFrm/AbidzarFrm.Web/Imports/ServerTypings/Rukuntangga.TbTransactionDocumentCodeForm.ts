namespace AbidzarFrm.Rukuntangga {
    export interface TbTransactionDocumentCodeForm {
        DocumentCode: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class TbTransactionDocumentCodeForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbTransactionDocumentCode';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbTransactionDocumentCodeForm.init)  {
                TbTransactionDocumentCodeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TbTransactionDocumentCodeForm, [
                    'DocumentCode', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

