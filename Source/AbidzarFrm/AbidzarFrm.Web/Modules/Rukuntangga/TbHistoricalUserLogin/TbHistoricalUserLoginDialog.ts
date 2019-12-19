
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbHistoricalUserLoginDialog extends Serenity.EntityDialog<TbHistoricalUserLoginRow, any> {
        protected getFormKey() { return TbHistoricalUserLoginForm.formKey; }
        protected getIdProperty() { return TbHistoricalUserLoginRow.idProperty; }
        protected getLocalTextPrefix() { return TbHistoricalUserLoginRow.localTextPrefix; }
        protected getNameProperty() { return TbHistoricalUserLoginRow.nameProperty; }
        protected getService() { return TbHistoricalUserLoginService.baseUrl; }
        protected getDeletePermission() { return TbHistoricalUserLoginRow.insertPermission; }