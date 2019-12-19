
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbProvinsiDialog extends Serenity.EntityDialog<TbProvinsiRow, any> {
        protected getFormKey() { return TbProvinsiForm.formKey; }
        protected getIdProperty() { return TbProvinsiRow.idProperty; }
        protected getLocalTextPrefix() { return TbProvinsiRow.localTextPrefix; }
        protected getNameProperty() { return TbProvinsiRow.nameProperty; }
        protected getService() { return TbProvinsiService.baseUrl; }
        protected getDeletePermission() { return TbProvinsiRow.insertPermission; }