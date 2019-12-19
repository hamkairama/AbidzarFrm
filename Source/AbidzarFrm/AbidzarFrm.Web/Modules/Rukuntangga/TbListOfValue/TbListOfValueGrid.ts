
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbListOfValueGrid extends Serenity.EntityGrid<TbListOfValueRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbListOfValue'; }
        protected getDialogType() { return TbListOfValueDialog; }
        protected getIdProperty() { return TbListOfValueRow.idProperty; }
        protected getInsertPermission() { return TbListOfValueRow.insertPermission; }