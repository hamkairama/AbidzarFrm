
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbDokumentasiDetailJenisKegiatanDialog extends Serenity.EntityDialog<TbDokumentasiDetailJenisKegiatanRow, any> {
        protected getFormKey() { return TbDokumentasiDetailJenisKegiatanForm.formKey; }
        protected getIdProperty() { return TbDokumentasiDetailJenisKegiatanRow.idProperty; }
        protected getLocalTextPrefix() { return TbDokumentasiDetailJenisKegiatanRow.localTextPrefix; }
        protected getNameProperty() { return TbDokumentasiDetailJenisKegiatanRow.nameProperty; }
        protected getService() { return TbDokumentasiDetailJenisKegiatanService.baseUrl; }
        protected getDeletePermission() { return TbDokumentasiDetailJenisKegiatanRow.insertPermission; }