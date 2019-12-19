
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbTanyaRtDialog extends Serenity.EntityDialog<TbTanyaRtRow, any> {
        protected getFormKey() { return TbTanyaRtForm.formKey; }
        protected getIdProperty() { return TbTanyaRtRow.idProperty; }
        protected getLocalTextPrefix() { return TbTanyaRtRow.localTextPrefix; }
        protected getNameProperty() { return TbTanyaRtRow.nameProperty; }
        protected getService() { return TbTanyaRtService.baseUrl; }
        protected getDeletePermission() { return TbTanyaRtRow.insertPermission; }
    }
}