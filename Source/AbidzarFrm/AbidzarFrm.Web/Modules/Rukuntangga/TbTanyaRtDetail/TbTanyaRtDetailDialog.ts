
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbTanyaRtDetailDialog extends Serenity.EntityDialog<TbTanyaRtDetailRow, any> {
        protected getFormKey() { return TbTanyaRtDetailForm.formKey; }
        protected getIdProperty() { return TbTanyaRtDetailRow.idProperty; }
        protected getLocalTextPrefix() { return TbTanyaRtDetailRow.localTextPrefix; }
        protected getNameProperty() { return TbTanyaRtDetailRow.nameProperty; }
        protected getService() { return TbTanyaRtDetailService.baseUrl; }
        protected getDeletePermission() { return TbTanyaRtDetailRow.insertPermission; }