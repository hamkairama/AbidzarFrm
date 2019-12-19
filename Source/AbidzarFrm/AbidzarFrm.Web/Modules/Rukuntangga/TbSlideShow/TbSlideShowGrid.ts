
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbSlideShowGrid extends Serenity.EntityGrid<TbSlideShowRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbSlideShow'; }
        protected getDialogType() { return TbSlideShowDialog; }
        protected getIdProperty() { return TbSlideShowRow.idProperty; }
        protected getInsertPermission() { return TbSlideShowRow.insertPermission; }