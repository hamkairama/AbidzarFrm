
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbTransactionStatusDialog extends Serenity.EntityDialog<TbTransactionStatusRow, any> {
        protected getFormKey() { return TbTransactionStatusForm.formKey; }
        protected getIdProperty() { return TbTransactionStatusRow.idProperty; }
        protected getLocalTextPrefix() { return TbTransactionStatusRow.localTextPrefix; }
        protected getNameProperty() { return TbTransactionStatusRow.nameProperty; }
        protected getService() { return TbTransactionStatusService.baseUrl; }
        protected getDeletePermission() { return TbTransactionStatusRow.insertPermission; }