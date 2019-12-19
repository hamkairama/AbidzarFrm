
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbBiodataGrid extends Serenity.EntityGrid<TbBiodataRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbBiodata'; }
        protected getDialogType() { return TbBiodataDialog; }
        protected getIdProperty() { return TbBiodataRow.idProperty; }
        protected getInsertPermission() { return TbBiodataRow.insertPermission; }