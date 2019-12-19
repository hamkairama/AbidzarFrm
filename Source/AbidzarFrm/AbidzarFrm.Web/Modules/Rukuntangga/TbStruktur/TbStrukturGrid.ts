
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbStrukturGrid extends Serenity.EntityGrid<TbStrukturRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbStruktur'; }
        protected getDialogType() { return TbStrukturDialog; }
        protected getIdProperty() { return TbStrukturRow.idProperty; }
        protected getInsertPermission() { return TbStrukturRow.insertPermission; }