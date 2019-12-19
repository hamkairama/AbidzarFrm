
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbKecamatanGrid extends Serenity.EntityGrid<TbKecamatanRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbKecamatan'; }
        protected getDialogType() { return TbKecamatanDialog; }
        protected getIdProperty() { return TbKecamatanRow.idProperty; }
        protected getInsertPermission() { return TbKecamatanRow.insertPermission; }