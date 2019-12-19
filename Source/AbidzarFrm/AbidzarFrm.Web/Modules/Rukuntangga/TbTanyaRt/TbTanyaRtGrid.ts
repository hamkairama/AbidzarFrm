
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbTanyaRtGrid extends Serenity.EntityGrid<TbTanyaRtRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbTanyaRt'; }
        protected getDialogType() { return TbTanyaRtDialog; }
        protected getIdProperty() { return TbTanyaRtRow.idProperty; }
        protected getInsertPermission() { return TbTanyaRtRow.insertPermission; }