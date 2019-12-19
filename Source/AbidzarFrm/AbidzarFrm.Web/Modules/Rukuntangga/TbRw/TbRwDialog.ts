
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class TbRwDialog extends Serenity.EntityDialog<TbRwRow, any> {
        protected getFormKey() { return TbRwForm.formKey; }
        protected getIdProperty() { return TbRwRow.idProperty; }
        protected getLocalTextPrefix() { return TbRwRow.localTextPrefix; }
        protected getNameProperty() { return TbRwRow.nameProperty; }
        protected getService() { return TbRwService.baseUrl; }
        protected getDeletePermission() { return TbRwRow.insertPermission; }
    }
}