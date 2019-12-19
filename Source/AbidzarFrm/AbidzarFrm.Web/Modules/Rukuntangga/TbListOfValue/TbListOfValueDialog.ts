
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbListOfValueDialog extends Serenity.EntityDialog<TbListOfValueRow, any> {
        protected getFormKey() { return TbListOfValueForm.formKey; }
        protected getIdProperty() { return TbListOfValueRow.idProperty; }
        protected getLocalTextPrefix() { return TbListOfValueRow.localTextPrefix; }
        protected getNameProperty() { return TbListOfValueRow.nameProperty; }
        protected getService() { return TbListOfValueService.baseUrl; }
        protected getDeletePermission() { return TbListOfValueRow.insertPermission; }