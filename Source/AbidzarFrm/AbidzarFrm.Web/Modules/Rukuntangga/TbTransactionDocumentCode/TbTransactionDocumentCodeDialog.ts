
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbTransactionDocumentCodeDialog extends Serenity.EntityDialog<TbTransactionDocumentCodeRow, any> {
        protected getFormKey() { return TbTransactionDocumentCodeForm.formKey; }
        protected getIdProperty() { return TbTransactionDocumentCodeRow.idProperty; }
        protected getLocalTextPrefix() { return TbTransactionDocumentCodeRow.localTextPrefix; }
        protected getNameProperty() { return TbTransactionDocumentCodeRow.nameProperty; }
        protected getService() { return TbTransactionDocumentCodeService.baseUrl; }
        protected getDeletePermission() { return TbTransactionDocumentCodeRow.insertPermission; }