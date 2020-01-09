
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.maximizable()
    export class TbTransactionFlowDetailDialog extends Common.GridEditorDialog<TbTransactionFlowDetailRow> {
        protected getFormKey() { return TbTransactionFlowDetailForm.formKey; }
        //protected getIdProperty() { return TbTransactionFlowDetailRow.idProperty; }
        protected getLocalTextPrefix() { return TbTransactionFlowDetailRow.localTextPrefix; }
        //protected getNameProperty() { return TbTransactionFlowDetailRow.nameProperty; }
        //protected getService() { return TbTransactionFlowDetailService.baseUrl; }
        //protected getDeletePermission() { return TbTransactionFlowDetailRow.insertPermission; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}