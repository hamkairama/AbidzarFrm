
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbErrorLogsDialog extends Serenity.EntityDialog<TbErrorLogsRow, any> {
        protected getFormKey() { return TbErrorLogsForm.formKey; }
        protected getIdProperty() { return TbErrorLogsRow.idProperty; }
        protected getLocalTextPrefix() { return TbErrorLogsRow.localTextPrefix; }
        protected getNameProperty() { return TbErrorLogsRow.nameProperty; }
        protected getService() { return TbErrorLogsService.baseUrl; }
        protected getDeletePermission() { return TbErrorLogsRow.insertPermission; }