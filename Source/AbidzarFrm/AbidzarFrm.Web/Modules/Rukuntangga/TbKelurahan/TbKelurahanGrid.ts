
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbKelurahanGrid extends Serenity.EntityGrid<TbKelurahanRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbKelurahan'; }
        protected getDialogType() { return TbKelurahanDialog; }
        protected getIdProperty() { return TbKelurahanRow.idProperty; }
        protected getInsertPermission() { return TbKelurahanRow.insertPermission; }