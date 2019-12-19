
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbAutentikasiTokenDialog extends Serenity.EntityDialog<TbAutentikasiTokenRow, any> {
        protected getFormKey() { return TbAutentikasiTokenForm.formKey; }
        protected getIdProperty() { return TbAutentikasiTokenRow.idProperty; }
        protected getLocalTextPrefix() { return TbAutentikasiTokenRow.localTextPrefix; }
        protected getNameProperty() { return TbAutentikasiTokenRow.nameProperty; }
        protected getService() { return TbAutentikasiTokenService.baseUrl; }
        protected getDeletePermission() { return TbAutentikasiTokenRow.insertPermission; }