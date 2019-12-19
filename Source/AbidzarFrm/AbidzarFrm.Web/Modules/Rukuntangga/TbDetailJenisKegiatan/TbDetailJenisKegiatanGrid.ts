
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbDetailJenisKegiatanGrid extends Serenity.EntityGrid<TbDetailJenisKegiatanRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbDetailJenisKegiatan'; }
        protected getDialogType() { return TbDetailJenisKegiatanDialog; }
        protected getIdProperty() { return TbDetailJenisKegiatanRow.idProperty; }
        protected getInsertPermission() { return TbDetailJenisKegiatanRow.insertPermission; }