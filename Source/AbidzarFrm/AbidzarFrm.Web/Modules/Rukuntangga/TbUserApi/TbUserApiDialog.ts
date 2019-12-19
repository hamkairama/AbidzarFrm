
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbUserApiDialog extends Serenity.EntityDialog<TbUserApiRow, any> {
        protected getFormKey() { return TbUserApiForm.formKey; }
        protected getIdProperty() { return TbUserApiRow.idProperty; }
        protected getLocalTextPrefix() { return TbUserApiRow.localTextPrefix; }
        protected getNameProperty() { return TbUserApiRow.nameProperty; }
        protected getService() { return TbUserApiService.baseUrl; }
        protected getDeletePermission() { return TbUserApiRow.insertPermission; }