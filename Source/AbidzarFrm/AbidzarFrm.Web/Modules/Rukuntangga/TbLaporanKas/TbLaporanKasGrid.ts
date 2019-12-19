
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbLaporanKasGrid extends Serenity.EntityGrid<TbLaporanKasRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbLaporanKas'; }
        protected getDialogType() { return TbLaporanKasDialog; }
        protected getIdProperty() { return TbLaporanKasRow.idProperty; }
        protected getInsertPermission() { return TbLaporanKasRow.insertPermission; }