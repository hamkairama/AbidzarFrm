
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbKotaDialog extends Serenity.EntityDialog<TbKotaRow, any> {
        protected getFormKey() { return TbKotaForm.formKey; }
        protected getIdProperty() { return TbKotaRow.idProperty; }
        protected getLocalTextPrefix() { return TbKotaRow.localTextPrefix; }
        protected getNameProperty() { return TbKotaRow.nameProperty; }
        protected getService() { return TbKotaService.baseUrl; }
        protected getDeletePermission() { return TbKotaRow.insertPermission; }