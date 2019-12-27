namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class TbKtpGrid extends Serenity.EntityGrid<TbKtpRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbKtp'; }
        protected getDialogType() { return TbKtpDialog; }
        protected getIdProperty() { return TbKtpRow.idProperty; }
        protected getInsertPermission() { return TbKtpRow.insertPermission; }

        private treeMixin: Serenity.TreeGridMixin<TbKtpRow>;

        constructor(container: JQuery) {
            super(container);

            //this.treeMixin = new Serenity.TreeGridMixin({
            //    grid: this,
            //    initialCollapse: () => true,
            //    toggleField: TbKtpRow.Fields.Kk,
            //    getParentId: x => x.IdKelurahan,
            //});
        }

        //protected usePager() {
        //    return false;
        //}


    }
}