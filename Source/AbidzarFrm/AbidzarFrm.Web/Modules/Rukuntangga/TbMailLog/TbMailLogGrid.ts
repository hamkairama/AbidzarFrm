
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbMailLogGrid extends Serenity.EntityGrid<TbMailLogRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbMailLog'; }
        protected getDialogType() { return TbMailLogDialog; }
        protected getIdProperty() { return TbMailLogRow.idProperty; }
        protected getInsertPermission() { return TbMailLogRow.insertPermission; }