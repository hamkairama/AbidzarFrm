
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbPollingPemiluGrid extends Serenity.EntityGrid<TbPollingPemiluRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbPollingPemilu'; }
        protected getDialogType() { return TbPollingPemiluDialog; }
        protected getIdProperty() { return TbPollingPemiluRow.idProperty; }
        protected getInsertPermission() { return TbPollingPemiluRow.insertPermission; }