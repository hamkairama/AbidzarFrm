
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbTransactionStatusGrid extends Serenity.EntityGrid<TbTransactionStatusRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbTransactionStatus'; }
        protected getDialogType() { return TbTransactionStatusDialog; }
        protected getIdProperty() { return TbTransactionStatusRow.idProperty; }
        protected getInsertPermission() { return TbTransactionStatusRow.insertPermission; }