
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbUserGrid extends Serenity.EntityGrid<TbUserRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbUser'; }
        protected getDialogType() { return TbUserDialog; }
        protected getIdProperty() { return TbUserRow.idProperty; }
        protected getInsertPermission() { return TbUserRow.insertPermission; }