
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbProvinsiGrid extends Serenity.EntityGrid<TbProvinsiRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbProvinsi'; }
        protected getDialogType() { return TbProvinsiDialog; }
        protected getIdProperty() { return TbProvinsiRow.idProperty; }
        protected getInsertPermission() { return TbProvinsiRow.insertPermission; }