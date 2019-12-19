
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbDokumentasiDetailJenisKegiatanGrid extends Serenity.EntityGrid<TbDokumentasiDetailJenisKegiatanRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbDokumentasiDetailJenisKegiatan'; }
        protected getDialogType() { return TbDokumentasiDetailJenisKegiatanDialog; }
        protected getIdProperty() { return TbDokumentasiDetailJenisKegiatanRow.idProperty; }
        protected getInsertPermission() { return TbDokumentasiDetailJenisKegiatanRow.insertPermission; }