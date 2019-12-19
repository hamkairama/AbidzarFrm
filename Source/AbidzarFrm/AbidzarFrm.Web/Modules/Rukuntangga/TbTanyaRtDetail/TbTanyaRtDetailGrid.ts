
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbTanyaRtDetailGrid extends Serenity.EntityGrid<TbTanyaRtDetailRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbTanyaRtDetail'; }
        protected getDialogType() { return TbTanyaRtDetailDialog; }
        protected getIdProperty() { return TbTanyaRtDetailRow.idProperty; }
        protected getInsertPermission() { return TbTanyaRtDetailRow.insertPermission; }