
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbTestimoniGrid extends Serenity.EntityGrid<TbTestimoniRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbTestimoni'; }
        protected getDialogType() { return TbTestimoniDialog; }
        protected getIdProperty() { return TbTestimoniRow.idProperty; }
        protected getInsertPermission() { return TbTestimoniRow.insertPermission; }