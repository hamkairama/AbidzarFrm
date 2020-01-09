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
        }

        protected getButtons() {
            let buttons = super.getButtons();

            buttons.push(AbidzarFrm.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Rukuntangga/TbKtp/ListExcel',
                separator: false,
                title: "Export to Excell",
                hint: "Export to Excell",
                cssClass: "export-xlsx-button"
            }));           

            return buttons;
        }


    }
}