
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbEmailTemplateGrid extends Serenity.EntityGrid<TbEmailTemplateRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbEmailTemplate'; }
        protected getDialogType() { return TbEmailTemplateDialog; }
        protected getIdProperty() { return TbEmailTemplateRow.idProperty; }
        protected getInsertPermission() { return TbEmailTemplateRow.insertPermission; }