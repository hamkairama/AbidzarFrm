
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbUserDialog extends Serenity.EntityDialog<TbUserRow, any> {
        protected getFormKey() { return TbUserForm.formKey; }
        protected getIdProperty() { return TbUserRow.idProperty; }
        protected getLocalTextPrefix() { return TbUserRow.localTextPrefix; }
        protected getNameProperty() { return TbUserRow.nameProperty; }
        protected getService() { return TbUserService.baseUrl; }
        protected getDeletePermission() { return TbUserRow.insertPermission; }