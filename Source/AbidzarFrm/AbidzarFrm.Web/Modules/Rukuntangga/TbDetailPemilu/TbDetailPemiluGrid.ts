
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbDetailPemiluGrid extends Serenity.EntityGrid<TbDetailPemiluRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbDetailPemilu'; }
        protected getDialogType() { return TbDetailPemiluDialog; }
        protected getIdProperty() { return TbDetailPemiluRow.idProperty; }
        protected getInsertPermission() { return TbDetailPemiluRow.insertPermission; }