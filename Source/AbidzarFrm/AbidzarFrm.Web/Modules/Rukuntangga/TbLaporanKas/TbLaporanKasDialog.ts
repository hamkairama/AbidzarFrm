
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbLaporanKasDialog extends Serenity.EntityDialog<TbLaporanKasRow, any> {
        protected getFormKey() { return TbLaporanKasForm.formKey; }
        protected getIdProperty() { return TbLaporanKasRow.idProperty; }
        protected getLocalTextPrefix() { return TbLaporanKasRow.localTextPrefix; }
        protected getNameProperty() { return TbLaporanKasRow.nameProperty; }
        protected getService() { return TbLaporanKasService.baseUrl; }
        protected getDeletePermission() { return TbLaporanKasRow.insertPermission; }