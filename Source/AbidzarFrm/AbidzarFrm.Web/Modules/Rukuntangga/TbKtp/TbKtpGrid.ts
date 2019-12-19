
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class TbKtpGrid extends Serenity.EntityGrid<TbKtpRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbKtp'; }
        protected getDialogType() { return TbKtpDialog; }
        protected getIdProperty() { return TbKtpRow.idProperty; }
        protected getInsertPermission() { return TbKtpRow.insertPermission; }
    }
}