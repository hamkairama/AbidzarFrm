
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbErrorLogsGrid extends Serenity.EntityGrid<TbErrorLogsRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbErrorLogs'; }
        protected getDialogType() { return TbErrorLogsDialog; }
        protected getIdProperty() { return TbErrorLogsRow.idProperty; }
        protected getInsertPermission() { return TbErrorLogsRow.insertPermission; }