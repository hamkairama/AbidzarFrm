
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbJenisInformasiGrid extends Serenity.EntityGrid<TbJenisInformasiRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbJenisInformasi'; }
        protected getDialogType() { return TbJenisInformasiDialog; }
        protected getIdProperty() { return TbJenisInformasiRow.idProperty; }
        protected getInsertPermission() { return TbJenisInformasiRow.insertPermission; }