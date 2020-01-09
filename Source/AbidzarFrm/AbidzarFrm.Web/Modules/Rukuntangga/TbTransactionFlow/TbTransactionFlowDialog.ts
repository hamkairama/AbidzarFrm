
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.maximizable()
    export class TbTransactionFlowDialog extends Serenity.EntityDialog<TbTransactionFlowRow, any> {
        protected getFormKey() { return TbTransactionFlowForm.formKey; }
        protected getIdProperty() { return TbTransactionFlowRow.idProperty; }
        protected getLocalTextPrefix() { return TbTransactionFlowRow.localTextPrefix; }
        protected getNameProperty() { return TbTransactionFlowRow.nameProperty; }
        protected getService() { return TbTransactionFlowService.baseUrl; }
        protected getDeletePermission() { return TbTransactionFlowRow.insertPermission; }
    }
}