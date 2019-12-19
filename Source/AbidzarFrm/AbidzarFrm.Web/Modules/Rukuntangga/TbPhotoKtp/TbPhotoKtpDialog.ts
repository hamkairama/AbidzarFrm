
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbPhotoKtpDialog extends Serenity.EntityDialog<TbPhotoKtpRow, any> {
        protected getFormKey() { return TbPhotoKtpForm.formKey; }
        protected getIdProperty() { return TbPhotoKtpRow.idProperty; }
        protected getLocalTextPrefix() { return TbPhotoKtpRow.localTextPrefix; }
        protected getNameProperty() { return TbPhotoKtpRow.nameProperty; }
        protected getService() { return TbPhotoKtpService.baseUrl; }
        protected getDeletePermission() { return TbPhotoKtpRow.insertPermission; }