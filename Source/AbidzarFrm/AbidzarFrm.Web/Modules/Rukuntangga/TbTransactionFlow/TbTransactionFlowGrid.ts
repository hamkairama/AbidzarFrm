
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbTransactionFlowGrid extends Serenity.EntityGrid<TbTransactionFlowRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbTransactionFlow'; }
        protected getDialogType() { return TbTransactionFlowDialog; }
        protected getIdProperty() { return TbTransactionFlowRow.idProperty; }
        protected getInsertPermission() { return TbTransactionFlowRow.insertPermission; }