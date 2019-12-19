
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbJenisKegiatanGrid extends Serenity.EntityGrid<TbJenisKegiatanRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbJenisKegiatan'; }
        protected getDialogType() { return TbJenisKegiatanDialog; }
        protected getIdProperty() { return TbJenisKegiatanRow.idProperty; }
        protected getInsertPermission() { return TbJenisKegiatanRow.insertPermission; }