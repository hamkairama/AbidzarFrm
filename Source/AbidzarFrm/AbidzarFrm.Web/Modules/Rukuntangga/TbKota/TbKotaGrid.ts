
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbKotaGrid extends Serenity.EntityGrid<TbKotaRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbKota'; }
        protected getDialogType() { return TbKotaDialog; }
        protected getIdProperty() { return TbKotaRow.idProperty; }
        protected getInsertPermission() { return TbKotaRow.insertPermission; }