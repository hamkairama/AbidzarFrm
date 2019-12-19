
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbRtGrid extends Serenity.EntityGrid<TbRtRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbRt'; }
        protected getDialogType() { return TbRtDialog; }
        protected getIdProperty() { return TbRtRow.idProperty; }
        protected getInsertPermission() { return TbRtRow.insertPermission; }