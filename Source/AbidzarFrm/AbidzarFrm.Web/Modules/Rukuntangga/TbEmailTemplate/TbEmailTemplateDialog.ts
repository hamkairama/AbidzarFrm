
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbEmailTemplateDialog extends Serenity.EntityDialog<TbEmailTemplateRow, any> {
        protected getFormKey() { return TbEmailTemplateForm.formKey; }
        protected getIdProperty() { return TbEmailTemplateRow.idProperty; }
        protected getLocalTextPrefix() { return TbEmailTemplateRow.localTextPrefix; }
        protected getNameProperty() { return TbEmailTemplateRow.nameProperty; }
        protected getService() { return TbEmailTemplateService.baseUrl; }
        protected getDeletePermission() { return TbEmailTemplateRow.insertPermission; }