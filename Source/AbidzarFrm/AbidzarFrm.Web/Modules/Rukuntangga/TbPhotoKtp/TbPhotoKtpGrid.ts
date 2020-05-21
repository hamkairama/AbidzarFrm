
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbPhotoKtpGrid extends Serenity.EntityGrid<TbPhotoKtpRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbPhotoKtp'; }
        protected getDialogType() { return TbPhotoKtpDialog; }
        protected getIdProperty() { return TbPhotoKtpRow.idProperty; }
        protected getInsertPermission() { return TbPhotoKtpRow.insertPermission; }
    }
}