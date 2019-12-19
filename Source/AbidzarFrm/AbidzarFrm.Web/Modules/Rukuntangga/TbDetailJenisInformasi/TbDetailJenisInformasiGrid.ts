
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbDetailJenisInformasiGrid extends Serenity.EntityGrid<TbDetailJenisInformasiRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbDetailJenisInformasi'; }
        protected getDialogType() { return TbDetailJenisInformasiDialog; }
        protected getIdProperty() { return TbDetailJenisInformasiRow.idProperty; }
        protected getInsertPermission() { return TbDetailJenisInformasiRow.insertPermission; }