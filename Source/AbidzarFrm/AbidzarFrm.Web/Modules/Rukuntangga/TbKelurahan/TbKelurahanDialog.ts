
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbKelurahanDialog extends Serenity.EntityDialog<TbKelurahanRow, any> {
        protected getFormKey() { return TbKelurahanForm.formKey; }
        protected getIdProperty() { return TbKelurahanRow.idProperty; }
        protected getLocalTextPrefix() { return TbKelurahanRow.localTextPrefix; }
        protected getNameProperty() { return TbKelurahanRow.nameProperty; }
        protected getService() { return TbKelurahanService.baseUrl; }
        protected getDeletePermission() { return TbKelurahanRow.insertPermission; }