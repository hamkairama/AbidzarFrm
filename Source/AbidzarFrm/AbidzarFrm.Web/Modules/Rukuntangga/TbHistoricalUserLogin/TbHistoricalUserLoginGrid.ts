
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbHistoricalUserLoginGrid extends Serenity.EntityGrid<TbHistoricalUserLoginRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbHistoricalUserLogin'; }
        protected getDialogType() { return TbHistoricalUserLoginDialog; }
        protected getIdProperty() { return TbHistoricalUserLoginRow.idProperty; }
        protected getInsertPermission() { return TbHistoricalUserLoginRow.insertPermission; }