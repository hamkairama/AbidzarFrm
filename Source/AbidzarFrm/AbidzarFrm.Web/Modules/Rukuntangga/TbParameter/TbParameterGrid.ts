
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbParameterGrid extends Serenity.EntityGrid<TbParameterRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbParameter'; }
        protected getDialogType() { return TbParameterDialog; }
        protected getIdProperty() { return TbParameterRow.idProperty; }
        protected getInsertPermission() { return TbParameterRow.insertPermission; }