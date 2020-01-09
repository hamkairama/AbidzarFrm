
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbGaleryGrid extends Serenity.EntityGrid<TbGaleryRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbGalery'; }
        protected getDialogType() { return TbGaleryDialog; }
        protected getIdProperty() { return TbGaleryRow.idProperty; }
        protected getInsertPermission() { return TbGaleryRow.insertPermission; }