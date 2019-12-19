
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbUserApiGrid extends Serenity.EntityGrid<TbUserApiRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbUserApi'; }
        protected getDialogType() { return TbUserApiDialog; }
        protected getIdProperty() { return TbUserApiRow.idProperty; }
        protected getInsertPermission() { return TbUserApiRow.insertPermission; }