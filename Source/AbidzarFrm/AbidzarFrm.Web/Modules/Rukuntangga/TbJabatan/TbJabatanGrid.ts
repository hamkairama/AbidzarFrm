
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbJabatanGrid extends Serenity.EntityGrid<TbJabatanRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbJabatan'; }
        protected getDialogType() { return TbJabatanDialog; }
        protected getIdProperty() { return TbJabatanRow.idProperty; }
        protected getInsertPermission() { return TbJabatanRow.insertPermission; }