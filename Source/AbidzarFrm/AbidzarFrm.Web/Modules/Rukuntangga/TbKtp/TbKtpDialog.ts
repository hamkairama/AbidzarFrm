
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class TbKtpDialog extends Serenity.EntityDialog<TbKtpRow, any> {
        protected getFormKey() { return TbKtpForm.formKey; }
        protected getIdProperty() { return TbKtpRow.idProperty; }
        protected getLocalTextPrefix() { return TbKtpRow.localTextPrefix; }
        protected getNameProperty() { return TbKtpRow.nameProperty; }
        protected getService() { return TbKtpService.baseUrl; }
        protected getDeletePermission() { return TbKtpRow.insertPermission; }

        //protected updateTitle() {
        //    super.updateTitle();
        //    if (this.isNew()) {
        //        this.set_dialogTitle("New");
        //    }
        //}
    }
}