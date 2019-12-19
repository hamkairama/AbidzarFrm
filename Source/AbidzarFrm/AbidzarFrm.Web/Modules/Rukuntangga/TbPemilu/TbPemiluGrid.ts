
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbPemiluGrid extends Serenity.EntityGrid<TbPemiluRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbPemilu'; }
        protected getDialogType() { return TbPemiluDialog; }
        protected getIdProperty() { return TbPemiluRow.idProperty; }
        protected getInsertPermission() { return TbPemiluRow.insertPermission; }