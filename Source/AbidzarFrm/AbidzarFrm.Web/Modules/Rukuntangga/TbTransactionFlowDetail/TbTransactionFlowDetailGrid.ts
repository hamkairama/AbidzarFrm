
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbTransactionFlowDetailGrid extends Serenity.EntityGrid<TbTransactionFlowDetailRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbTransactionFlowDetail'; }
        protected getDialogType() { return TbTransactionFlowDetailDialog; }
        protected getIdProperty() { return TbTransactionFlowDetailRow.idProperty; }
        protected getInsertPermission() { return TbTransactionFlowDetailRow.insertPermission; }