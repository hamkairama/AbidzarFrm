
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbRwGrid extends Serenity.EntityGrid<TbRwRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbRw'; }
        protected getDialogType() { return TbRwDialog; }
        protected getIdProperty() { return TbRwRow.idProperty; }
        protected getInsertPermission() { return TbRwRow.insertPermission; }