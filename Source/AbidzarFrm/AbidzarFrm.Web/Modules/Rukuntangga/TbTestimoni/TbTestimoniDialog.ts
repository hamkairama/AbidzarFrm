
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbTestimoniDialog extends Serenity.EntityDialog<TbTestimoniRow, any> {
        protected getFormKey() { return TbTestimoniForm.formKey; }
        protected getIdProperty() { return TbTestimoniRow.idProperty; }
        protected getLocalTextPrefix() { return TbTestimoniRow.localTextPrefix; }
        protected getNameProperty() { return TbTestimoniRow.nameProperty; }
        protected getService() { return TbTestimoniService.baseUrl; }
        protected getDeletePermission() { return TbTestimoniRow.insertPermission; }