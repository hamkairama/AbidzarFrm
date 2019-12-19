
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbParameterDialog extends Serenity.EntityDialog<TbParameterRow, any> {
        protected getFormKey() { return TbParameterForm.formKey; }
        protected getIdProperty() { return TbParameterRow.idProperty; }
        protected getLocalTextPrefix() { return TbParameterRow.localTextPrefix; }
        protected getNameProperty() { return TbParameterRow.nameProperty; }
        protected getService() { return TbParameterService.baseUrl; }
        protected getDeletePermission() { return TbParameterRow.insertPermission; }