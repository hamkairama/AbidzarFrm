
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbTransactionDocumentCodeGrid extends Serenity.EntityGrid<TbTransactionDocumentCodeRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbTransactionDocumentCode'; }
        protected getDialogType() { return TbTransactionDocumentCodeDialog; }
        protected getIdProperty() { return TbTransactionDocumentCodeRow.idProperty; }
        protected getInsertPermission() { return TbTransactionDocumentCodeRow.insertPermission; }